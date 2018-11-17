<template>
  <v-app>
    <!-- Toolbar -->
    
    <div>
      <v-container class="ma-0 pa-0 mb-0" style="max-width: 100%;">
        <v-layout row align-center>
          <v-flex xs4 class="orange white--text toolbar-icon" @click="decrementTurn()">
            <v-icon dark> fast_rewind </v-icon>
          </v-flex>
          <v-flex style="height: 27px;" xs4 class="blue white--text toolbar-icon" @click="showForm = !showForm">
            <v-icon dark> add </v-icon>
          </v-flex>
          <v-flex xs4 class="green white--text toolbar-icon" @click="incrementTurn()">
            <v-icon dark>fast_forward</v-icon>
          </v-flex>
        </v-layout>
      </v-container>
      </div>
  

    <!-- Up Now and On Deck -->
    <lineup :full-list="fullList" :turn="turn">
    </lineup>

    <!-- New combatant form -->
    <add-form :show-form="showForm" @clearForm="clearCombatantForm()" @addCombatant="addCombatant" ></add-form>
    

    <!-- Combatant List -->
    <combatant-list :full-list="fullList" :turn="turn" @sort="sortList()" @removeCombatant="removeCombatant"
    @moveCombatantDown="moveCombatantDown" @moveCombatantUp="moveCombatantUp" >
    </combatant-list>

   <v-card class="blue lighten-1 pa-3 white--text ma-2" v-if="fullList.length < 1" >
     <v-layout>
       <h1> Please Add a Combatant Using the + button </h1>
     </v-layout>
   </v-card>
        
  </v-app>
</template>

<script>
import Lineup from './components/Lineup.vue'
import AddForm from './components/AddForm.vue'
import CombatantList from './components/CombatantList.vue'

export default {
  data: () => {
    return {
      name: 'app',
      fullList: [],
      showForm: false,
      turn: 0,
      needsSort: true,
    }
  },

  watch: {
    turn() {
      
    },

    fullList() {
      this.savePlayers()
    }
  },

  components: {
    Lineup,
    AddForm,
    CombatantList
  },

  methods: {
    calculateToolbarClass(combatant) {
      if (this.turn == this.fullList.indexOf(combatant)) {
        return true
      } else {
        return false
      }
    },

    incrementTurn() {
      if (this.turn == this.fullList.length - 1) {
        this.turn = 0
      } else {
        this.turn++
      }
    },

    decrementTurn() {
      if (this.turn == 0) {
        this.turn = this.fullList.length - 1
      } else {
        this.turn--
      }
    },

    sortList() {
      this.fullList.sort(((a, b) => {
        return b.int - a.int
      }))
      this.needsSort = false
    },

    setupSort() {
      if (this.needsSort) {
        this.sortList()
        this.needsSort = false
      }
    },

    addCombatant(newbie) {
      this.fullList.push(newbie)
      this.sortList()
    },

    clearCombatantForm() {
      this.showForm = false
    },

    removeCombatant(combatant) {
      this.fullList.splice(this.fullList.indexOf(combatant), 1)
      this.sortList()
    },

    getNext() {
      if (this.turn == this.fullList.length - 1) {
        return this.fullList[0].name
      } else {
        return this.fullList[this.turn + 1].name
      }
    },

    savePlayers() {
      let playersToSave = []
      this.fullList.forEach(combatant => {
        if (combatant.isPlayer) {
          playersToSave.push(combatant)
        }
      })
      window.localStorage.setItem('InitTrackerSave', JSON.stringify(playersToSave))
    },

    moveCombatantDown(combatant) {
      let currentIndex = this.fullList.indexOf(combatant)
      let current = this.fullList[currentIndex]
      this.fullList[currentIndex] = this.fullList[currentIndex + 1]
      this.fullList[currentIndex + 1] = current
      this.fullList.unshift()
    },

    moveCombatantUp(combatant) {
      let currentIndex = this.fullList.indexOf(combatant)
      let current = this.fullList[currentIndex]
      this.fullList[currentIndex] = this.fullList[currentIndex - 1]
      this.fullList[currentIndex - 1] = current
      this.fullList.unshift()
    },

    move() {
      var b = list[y];
      list[y] = list[x];
      list[x] = b;
    }
  },

  created() {
    if (window.localStorage.getItem('InitTrackerSave')) {
      this.fullList = JSON.parse(window.localStorage.getItem('InitTrackerSave'))
    }
  },

  mounted() {
    this.sortList()
  }
}
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
}
</style>
