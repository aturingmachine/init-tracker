<template>
  <v-app>
    <!-- Toolbar -->
    <v-toolbar height="30px" dense class="grey mb-0">
      <v-container class="ma-0 pa-0 mb-0">
        <v-layout column align-center>
          <v-flex xs3>
          </v-flex>
          <v-flex xs3>
      <v-btn small icon class="blue white--text" @click="showForm = !showForm">
        <v-icon> add </v-icon>
      </v-btn>
      <v-btn small icon class="orange white--text" @click="decrementTurn()">
        <v-icon>fast_rewind</v-icon>
      </v-btn>
      <v-btn small icon class="green white--text" @click="incrementTurn()">
        <v-icon>fast_forward</v-icon>
      </v-btn>
          </v-flex>
          <v-flex xs3>
          </v-flex>
        </v-layout>
      </v-container>
    </v-toolbar>

    <!-- Up Now and On Deck -->
    <v-card v-if="fullList.length > 0">
      <v-layout wrap>
        <v-flex xs6 class="green white--text pa-1 title">
          Up:
        </v-flex>
        <v-flex xs6 class="pa-1 orange darken-2 white--text title">
          On Deck:
        </v-flex>

        <v-flex xs6 class="green white--text pa-1 title">
          {{ fullList[turn].name }}
        </v-flex>
        <v-flex xs6 class="pa-1 orange darken-2 white--text title" v-if="fullList.length > 1">
          {{ getNext() }}
        </v-flex>
        <v-flex xs6 class="pa-1 orange darken-2 white--text title" v-else>
          Add another combatant
        </v-flex>
        
      </v-layout>
    </v-card>

    <!-- New combatant form -->
    <v-card class="mb-2 mt-1 ml-2 mr-2 elevation-5" v-if="showForm">
      <v-card-text class="body">
        <v-layout row wrap>
          <v-flex xs6>
        <v-text-field autofocus v-model="newCombatant.name" label="Name"></v-text-field>
          </v-flex>
          <v-flex xs2></v-flex>
          <v-flex xs4>
        <v-text-field v-model="newCombatant.int" type="number"
          min="0" label="Initiative" @keyup.enter="addCombatant()">
         </v-text-field>
          </v-flex>
          <v-flex x12>
            <v-checkbox v-model="newCombatant.isPlayer" 
            label="Player Character? (Will Be Saved)" @keydown.enter="newCombatant.isPlayer = !newCombatant.isPlayer">
            </v-checkbox>
          </v-flex>
        </v-layout>
      </v-card-text>
      <v-card-actions class="mt-0 pt-0">
        <v-btn small icon class="green white--text" @click="addCombatant()">
          <v-icon> add </v-icon>
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn small icon class="red white--text" @click="clearCombatantForm()">
          <v-icon> clear </v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>

    <!-- Combatant List -->
    <v-layout v-if="fullList.length > 0" row class="pt-2 mt-2 mr-2 ml-2">
    <v-flex xs12 class="">
      <v-card v-for="combatant in fullList" :key="combatant.name" class="mb-3 mt-2">

        <v-toolbar dense card height="25px"
         :class="calculateToolbarClass(combatant) ? 'green white--text' :'grey lighten-2'">
          <!-- <span v-if="combatant.isPlayer" >
            <strong>PC</strong> &nbsp;
          </span> -->
          <v-badge left v-if="combatant.isPlayer">
            <span slot="badge"><strong>PC</strong></span>
          {{ combatant.name }}
          </v-badge>
          <span v-else>
            {{ combatant.name }}
          </span>
        </v-toolbar>

        <v-card-text class="pb-0 pt-0">
          <v-layout align-center row class="pt-0 mt-0 pb-0 mb-0">
            <v-flex xs2>
              <v-text-field min="0" v-model="combatant.int"
               type="number" label="Initiative" @click="sortList()">
            </v-text-field>
            </v-flex>

            <v-flex xs9 class="red">
            </v-flex>

            <!-- Actions for a combatant -->
            <v-flex xs1 class="">
              <v-btn icon small class="red white--text" @click="removeCombatant(combatant)">
                <v-icon>delete</v-icon>
              </v-btn>
            </v-flex>

          </v-layout>
        </v-card-text>
      </v-card>
    </v-flex>
    </v-layout>

   <v-card class="blue lighten-1 pa-3 white--text ma-2" v-if="fullList.length < 1" >
     <v-layout>
       <h1> Please Add a Combatant Using the + button </h1>
     </v-layout>
   </v-card>
        
  </v-app>
</template>

<script>

export default {
  data: () => {
    return {
      name: 'app',
      fullList: [],
      newCombatant: {
        isPlayer: false
      },
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

    addCombatant() {
      this.fullList.push(this.newCombatant)
      this.sortList()
      this.clearCombatantForm()
    },

    clearCombatantForm() {
      this.newCombatant = {
        name: '',
        int: null,
        isPlayer: false
      }
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
</style>
