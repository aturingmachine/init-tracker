<template>
  <v-card v-if="fullList.length > 0" class="mt-2">
      <v-layout wrap>
        <v-flex xs6 class="pa-1 yellow darken-2 white--text title">
          On Deck:
        </v-flex>
        <v-flex xs6 class="green white--text pa-1 title">
          Up:
        </v-flex>

        
        <v-flex xs6 class="pa-1 yellow darken-2 white--text title" v-if="fullList.length > 1">
          {{ getNext() }}
        </v-flex>
        <v-flex xs6 class="pa-1 yellow darken-2 white--text title" v-else>
          Add another combatant
        </v-flex>
        <v-flex xs6 class="green white--text pa-1 title">
          {{ fullList[turn].name }}
        </v-flex>
        
        
      </v-layout>
    </v-card>
</template>

<script>
export default {
  data: () => {
    return {}
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
    getNext() {
      if (this.turn == this.fullList.length - 1) {
        return this.fullList[0].name
      } else {
        return this.fullList[this.turn + 1].name
      }
    }
  }
}
</script>

<style>

</style>
