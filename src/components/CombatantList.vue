<template>
  <v-layout v-if="fullList.length > 0" row class="pt-2 mt-2 mr-2 ml-2">
    <v-flex xs12 class>
      <v-card
        :id="`combatant-${combatant.name}`"
        v-for="combatant in fullList"
        :key="combatant.id"
        class="mb-3 mt-2"
      >
        <v-toolbar
          dense
          card
          height="25px"
          :class="calculateToolbarClass(combatant) ? 'green white--text' :'grey lighten-2'"
        >
          <v-badge left v-if="combatant.isPlayer">
            <span slot="badge">
              <strong>PC</strong>
            </span>
            {{ combatant.name }}
          </v-badge>
          <span v-else>{{ combatant.name }}</span>
          <v-spacer></v-spacer>
          <v-btn
            :class="calculateToolbarClass(combatant) ? 'white--text' : 'black--text'"
            icon
            small
            v-if="isEdgeOfList(combatant) != -1"
            @click="moveCombatantUp(combatant)"
          >
            <v-icon>vertical_align_top</v-icon>
          </v-btn>
          <v-btn
            :class="calculateToolbarClass(combatant) ? 'white--text' : 'black--text'"
            small
            icon
            v-if="isEdgeOfList(combatant) != 1"
            @click="moveCombatantDown(combatant)"
          >
            <v-icon>vertical_align_bottom</v-icon>
          </v-btn>
          <v-btn
            icon
            small
            :class="calculateToolbarClass(combatant) ? 'red--text text--lighten-5' : 'red--text'"
            @click="removeCombatant(combatant)"
          >
            <v-icon>delete</v-icon>
          </v-btn>

          <v-menu offset-y>
            <v-btn
              :class="calculateToolbarClass(combatant) ? 'white--text' : 'black--text'"
              slot="activator"
              icon
              small
            >
              <v-icon>more_vert</v-icon>
            </v-btn>
            <v-list>
              <v-list-tile
                v-for="(option, index) in menuOptions"
                :key="index"
                @click="handleMenu(option, combatant)"
              >
                <v-list-tile-title>{{ option }}</v-list-tile-title>
              </v-list-tile>
            </v-list>
          </v-menu>
        </v-toolbar>

        <v-card-text class="pb-0 pt-0">
          <v-content grid-list-md>
            <v-layout align-center row wrap class="pt-0 mt-0 pb-0 mb-0">
              <v-flex xs2 class="mr-3">
                <v-text-field min="0" v-model="combatant.int" type="number" label="Initiative"></v-text-field>
              </v-flex>

              <v-flex xs2>
                <v-text-field min="0" v-model="combatant.ac" type="number" label="AC"></v-text-field>
              </v-flex>

              <v-flex xs2></v-flex>

              <v-flex xs2 class="mr-3">
                <v-text-field min="0" v-model="combatant.spellSpave" type="number" label="Save"></v-text-field>
              </v-flex>

              <v-flex xs2>
                <v-text-field
                  min="0"
                  v-model="combatant.passivePerception"
                  type="number"
                  label="Perception"
                ></v-text-field>
              </v-flex>

              <v-flex xs12>
                <v-checkbox
                  v-model="combatant.isConcentrating"
                  label="Concentration"
                  class="mt-0 pt-0 mb-0 pb-0"
                ></v-checkbox>
              </v-flex>

              <v-flex xs12>
                <v-select
                  class="mt-0 pt-0"
                  v-model="combatant.conditions"
                  :items="conditions"
                  label="Conditions"
                  multiple
                  chips
                  clearable
                ></v-select>
              </v-flex>
            </v-layout>
          </v-content>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data: () => {
    return {
      conditions: [
        "Blinded",
        "Charmed",
        "Deafened",
        "Fatigued",
        "Frightened",
        "Grappled",
        "Incapacitated",
        "Invisible",
        "Paralyzed",
        "Petrified",
        "Poisoned",
        "Prone",
        "Restrained",
        "Stunned",
        "Unconscious",
        "Exhaustion 1",
        "Exhaustion 2",
        "Exhaustion 3",
        "Exhaustion 4",
        "Exhaustion 5",
        "Exhaustion 6"
      ],
      menuOptions: ["Export"]
    };
  },

  props: {
    fullList: {
      type: Array
    },
    turn: {
      type: Number
    }
  },

  methods: {
    calculateToolbarClass(combatant) {
      if (this.turn == this.fullList.indexOf(combatant)) {
        return true;
      } else {
        return false;
      }
    },

    removeCombatant(combatant) {
      this.$emit("removeCombatant", combatant);
    },

    isEdgeOfList(combatant) {
      if (this.fullList.indexOf(combatant) == 0) {
        return -1;
      } else if (this.fullList.indexOf(combatant) == this.fullList.length - 1) {
        return 1;
      } else {
        return 0;
      }
    },

    moveCombatantDown(combatant) {
      this.$emit("moveCombatantDown", combatant);
    },

    moveCombatantUp(combatant) {
      this.$emit("moveCombatantUp", combatant);
    },

    handleMenu(menuOption, combatant) {
      switch (menuOption.toLowerCase()) {
        case "export":
          this.exportCombatant(combatant);
          break;
      }
    },

    exportCombatant(combatant) {
      this.$emit("export", combatant);
    }
  }
};
</script>

<style>
</style>
