<template>
  <v-app>
    <!-- Toolbar -->

    <div class="header">
      <v-container class="ma-0 pa-0 mb-0" style="max-width: 100%;">
        <v-layout row wrap align-center>
          <v-flex
            xs11
            class="indigo darken-3 white--text toolbar-icon round-header"
          >Round: {{ round }}</v-flex>
          <v-flex xs1 class="toolbar-icon blue-grey">
            <v-menu offset-y>
              <v-btn slot="activator" dark class="ml-1 mt-0 mb-0 pb-0 pt-0" icon small>
                <v-icon dark>folder</v-icon>
              </v-btn>
              <v-list>
                <v-list-tile
                  v-for="(combatant, index) in savedCombatants"
                  :key="index"
                  @click="deleteSaved(combatant)"
                >
                  <v-list-tile-title>
                    Delete: {{ combatant.name }}-
                    Int {{ combatant.int }}-
                    AC {{ combatant.ac }}
                  </v-list-tile-title>
                </v-list-tile>
              </v-list>
            </v-menu>
          </v-flex>
          <v-flex xs6 class="orange white--text toolbar-icon" @click="decrementTurn()">
            <v-icon dark>fast_rewind</v-icon>
          </v-flex>
          <v-flex xs6 class="green white--text toolbar-icon" @click="incrementTurn()">
            <v-icon dark>fast_forward</v-icon>
          </v-flex>
          <v-flex xs4 class="purple white--text toolbar-icon" @click="sortList()">
            <v-icon dark>sort</v-icon>
          </v-flex>
          <v-flex xs4 class="blue white--text toolbar-icon" @click="showForm = !showForm">
            <v-icon dark>add</v-icon>
          </v-flex>
          <v-flex
            v-if="!confirmingReset"
            xs4
            class="deep-orange lighten-1 white--text toolbar-icon"
            @click="confirmingReset = true"
          >
            <v-icon dark>refresh</v-icon>
          </v-flex>
          <v-flex
            v-if="confirmingReset"
            xs2
            class="deep-orange lighten-1 white--text toolbar-icon"
            @click="confirmingReset = false"
          >
            <v-icon dark>cancel</v-icon>
          </v-flex>
          <v-flex
            v-if="confirmingReset"
            xs2
            class="green darken-4 white--text toolbar-icon"
            @click="reset()"
          >
            <v-icon dark>check_circle</v-icon>
          </v-flex>
        </v-layout>
      </v-container>

      <!-- Up Now and On Deck -->
      <lineup :full-list="fullList" :turn="turn"></lineup>

      <!-- New combatant form -->

      <add-form
        class="mt-3 elevation-15"
        :show-form="showForm"
        :currentNames="fullList.map(i => i.name)"
        :savedCombatants="savedCombatants"
        @clearForm="clearCombatantForm()"
        @addCombatant="addCombatant"
      ></add-form>
    </div>

    <!-- Combatant List -->
    <div :class="!showForm ? 'content' : 'more-content'">
      <combatant-list
        :full-list="fullList"
        :turn="turn"
        @removeCombatant="removeCombatant"
        @moveCombatantDown="moveCombatantDown"
        @moveCombatantUp="moveCombatantUp"
        @export="exportCombatant"
      ></combatant-list>

      <v-card class="blue lighten-1 pa-3 white--text ma-2" v-if="fullList.length < 1">
        <v-layout>
          <h1>Please Add a Combatant Using the + button</h1>
        </v-layout>
      </v-card>
    </div>

    <v-snackbar v-model="snackbar" :timeout="2000" color="success">{{ snackBarText }}</v-snackbar>

    <quick-command-list
      v-if="isQuickActionOpen"
      class="quick-command-modal"
      :fullList="fullList"
      :commands="[...quickActions, ...auxillaryCommands]"
      @close="closeQuickCommand"
      @execute="executeQuickCommand"
    ></quick-command-list>
  </v-app>
</template>

<script>
import Lineup from "./components/Lineup.vue";
import AddForm from "./components/AddForm.vue";
import CombatantList from "./components/CombatantList.vue";
import QuickCommandList from "./components/QuickCommandList.vue";

export default {
  data: () => {
    return {
      name: "Initiative Tracker",
      fullList: [],
      savedCombatants: [],
      showForm: false,
      turn: 0,
      needsSort: true,
      round: 0,
      confirmingReset: false,
      snackbar: false,
      snackBarText: "",
      isQuickActionOpen: false,
      quickActions: [
        {
          name: "Add Character",
          code: "addChar"
        },
        {
          name: "Reset Rounds",
          code: "roundReset"
        },
        {
          name: "Sort Combatants",
          code: "sort"
        },
        {
          name: "Save Combatants",
          code: "save"
        }
      ],
      auxillaryCommands: []
    };
  },

  watch: {
    turn() {
      const target =
        document.getElementById(`combatant-${this.fullList[this.turn].name}`)
          .offsetTop - 150;
      window.scroll({ top: target, behavior: "smooth" });
    }
  },

  components: {
    Lineup,
    AddForm,
    CombatantList,
    QuickCommandList
  },

  methods: {
    calculateToolbarClass(combatant) {
      if (this.turn == this.fullList.indexOf(combatant)) {
        return true;
      } else {
        return false;
      }
    },

    incrementTurn() {
      if (this.isQuickActionOpen) {
        return;
      }
      if (this.turn == this.fullList.length - 1 || this.fullList.length == 0) {
        this.turn = 0;
        this.round++;
      } else {
        this.turn++;
      }
    },

    decrementTurn() {
      if (this.isQuickActionOpen) {
        return;
      }
      if (this.turn == 0) {
        this.turn = this.fullList.length - 1;
        if (this.round !== 0) {
          this.round--;
        }
      } else {
        this.turn--;
      }
    },

    sortList() {
      this.fullList.sort((a, b) => {
        return b.int - a.int;
      });
      this.needsSort = false;
    },

    addCombatant(newbie) {
      newbie["id"] = this.createId();
      this.fullList.push(newbie);
      this.sortList();
      this.procSnackbar(`Added ${newbie.name}`);

      this.populateQuickCommands();
    },

    clearCombatantForm() {
      this.showForm = false;
    },

    removeCombatant(combatant) {
      const activeCombatant = this.fullList[this.turn];
      if (this.fullList.indexOf(combatant) == this.fullList.length - 1) {
        this.turn = this.fullList.length - 2;
      }
      this.fullList.splice(this.fullList.indexOf(combatant), 1);
      this.sortList();
      this.turn = this.fullList.indexOf(activeCombatant);
      this.procSnackbar(`Removed ${combatant.name}`);

      this.populateQuickCommands();
    },

    getNext() {
      if (this.turn == this.fullList.length - 1) {
        return this.fullList[0].name;
      } else {
        return this.fullList[this.turn + 1].name;
      }
    },

    savePlayers() {
      let playersToSave = this.fullList.filter(combatant => combatant.isPlayer);
      window.localStorage.setItem(
        "InitTrackerSave",
        JSON.stringify(playersToSave)
      );
    },

    autoSave() {
      this.savePlayers();
      this.procSnackbar("Automaticaly Saved Data (~‾▿‾)~");
    },

    moveCombatantDown(combatant) {
      let currentIndex = this.fullList.indexOf(combatant);
      let current = this.fullList[currentIndex];
      this.fullList[currentIndex] = this.fullList[currentIndex + 1];
      this.fullList[currentIndex + 1] = current;
      this.fullList.unshift();
    },

    moveCombatantUp(combatant) {
      let currentIndex = this.fullList.indexOf(combatant);
      let current = this.fullList[currentIndex];
      this.fullList[currentIndex] = this.fullList[currentIndex - 1];
      this.fullList[currentIndex - 1] = current;
      this.fullList.unshift();
    },

    reset() {
      this.procSnackbar("Combat Rounds Reset");
      this.turn = 0;
      this.round = 0;
      this.confirmingReset = false;
    },

    procSnackbar(message) {
      this.snackBarText = message;
      this.snackbar = true;
    },

    exportCombatant(combatant) {
      this.savedCombatants.push(combatant);
      window.localStorage.setItem(
        "InitTrackerExportedCombatants",
        JSON.stringify(this.savedCombatants)
      );
      this.procSnackbar(`Saved ${combatant.name}`);

      this.populateQuickCommands();
    },

    deleteSaved(combatant) {
      this.savedCombatants.splice(this.savedCombatants.indexOf(combatant), 1);
      this.procSnackbar(`Deleted Saved ${combatant.name}`);
      window.localStorage.setItem(
        "InitTrackerExportedCombatants",
        JSON.stringify(this.savedCombatants)
      );
    },

    createId() {
      return (
        Math.random()
          .toString(36)
          .substring(2, 15) +
        Math.random()
          .toString(36)
          .substring(2, 15)
      );
    },

    activateQuickCommand() {
      this.isQuickActionOpen = true;
    },

    closeQuickCommand() {
      this.isQuickActionOpen = false;
    },

    toggleConcentration(combatant) {
      document.getElementById(`con-${combatant.id}`).click();
    },

    executeQuickCommand(commandCode, params) {
      this.isQuickActionOpen = false;

      switch (commandCode) {
        case "save":
          this.savePlayers();
          break;
        case "roundReset":
          this.reset();
          break;
        case "addChar":
          this.showForm = true;
          break;
        case "sort":
          this.sortList();
          break;
        case "loadSaved":
          this.addCombatant(params);
          break;
        case "deleteActive":
          this.removeCombatant(params);
          break;
        case "deleteSaved":
          this.deleteSaved(params);
          break;
        case "toggleCon":
          this.toggleConcentration(params);
          break;
        case "exportActive":
          this.exportCombatant(params);
          break;
      }
    },

    populateQuickCommands() {
      this.auxillaryCommands = [];

      // Add load saved commands
      this.auxillaryCommands = this.auxillaryCommands.concat(
        this.savedCombatants.map(savedCombatant => {
          return {
            name: `Load Saved Combatant: ${savedCombatant.name} - ${savedCombatant.int}`,
            code: "loadSaved",
            params: savedCombatant
          };
        })
      );

      // Add delete active commands
      this.auxillaryCommands = this.auxillaryCommands.concat(
        this.fullList.map(combatant => {
          return {
            name: "Delete Active Combatant: " + combatant.name,
            code: "deleteActive",
            params: combatant
          };
        })
      );

      // Add delete saved commands
      this.auxillaryCommands = this.auxillaryCommands.concat(
        this.savedCombatants.map(savedCombatant => {
          return {
            name: "Delete Saved Combatant: " + savedCombatant.name,
            code: "deleteSaved",
            params: savedCombatant
          };
        })
      );

      this.auxillaryCommands = this.auxillaryCommands.concat(
        this.fullList.map(combatant => {
          return {
            name: "Toggle Concentration: " + combatant.name,
            code: "toggleCon",
            params: combatant
          };
        })
      );

      this.auxillaryCommands = this.auxillaryCommands.concat(
        this.fullList.map(combatant => {
          return {
            name: "Export Combatant: " + combatant.name,
            code: "exportActive",
            params: combatant
          };
        })
      );
    },

    keyBoardHandler(e) {
      switch (e.keyCode) {
        case 37:
          this.decrementTurn();
          break;
        case 39:
          this.incrementTurn();
          break;
        case 190:
          this.activateQuickCommand();
          break;
        case 27:
          if (this.isQuickActionOpen) {
            this.closeQuickCommand()
          }
          break;
      }
    }
  },

  created() {
    if (window.localStorage.getItem("InitTrackerSave")) {
      const savedPlayers = JSON.parse(
        window.localStorage.getItem("InitTrackerSave")
      );
      savedPlayers
        .filter(player => !player.id)
        .forEach(player => (player["id"] = this.createId()));
      this.fullList = savedPlayers;
    }

    if (window.localStorage.getItem("InitTrackerExportedCombatants")) {
      this.savedCombatants = JSON.parse(
        window.localStorage.getItem("InitTrackerExportedCombatants")
      );
    } else {
      window.localStorage.setItem(
        "InitTrackerExportedCombatants",
        JSON.stringify([])
      );
    }

    this.populateQuickCommands();
  },

  mounted() {
    this.sortList();
    setInterval(this.autoSave, 120000);

    document.onkeyup = this.keyBoardHandler;
  }
};
</script>

<style>
.v-label--active {
  font-size: 12px;
}

.toolbar-icon {
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  user-select: none;
  transition: 0.3s;
}

.toolbar-icon:hover {
  filter: brightness(110%);
}

.header {
  position: fixed;
  width: 100%;
  z-index: 2;
}

.content {
  padding-top: 130px !important;
}

.more-content {
  padding-top: 485px !important;
}

.round-header {
  cursor: default;
  user-select: none;
  height: 28px;
}

.round-header:hover {
  filter: none;
}

.quick-command-modal {
  width: 80%;
  position: fixed;
  top: 20%;
  left: 10%;
  border: 4px solid gainsboro;
  border-radius: 6px;
  box-shadow: grey 0px 8px 8px;
}
</style>
