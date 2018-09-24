<template>
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
    calculateToolbarClass(combatant) {
      if (this.turn == this.fullList.indexOf(combatant)) {
        return true
      } else {
        return false
      }
    },

    sortList() {
      this.$emit('sort')
    },

    removeCombatant(combatant) {
      this.$emit('removeCombatant', combatant)
    }
  }
}
</script>

<style>

</style>
