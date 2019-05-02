<template>
  <v-card class="mb-2 mt-1 ml-2 mr-2 elevation-5" v-if="showForm">
    <v-card-text class="body">
      <v-layout row wrap>
        <v-flex xs5 class="mr-3">
          <v-text-field autofocus v-model="newCombatant.name" label="Name"></v-text-field>
        </v-flex>
        <v-flex xs3 class="mr-3">
          <v-text-field v-model="newCombatant.int" type="number" min="0" label="Initiative"></v-text-field>
        </v-flex>
        <v-flex xs3>
          <v-text-field
            v-model="newCombatant.ac"
            type="number"
            min="0"
            label="AC"
            @keyup.enter="addCombatant()"
          ></v-text-field>
        </v-flex>
        <v-flex xs9></v-flex>
        <v-flex xs5 class="mr-3">
          <v-text-field
            v-model="newCombatant.spellSave"
            type="number"
            min="0"
            label="Spell Save DC"
            @keyup.enter="addCombatant()"
          ></v-text-field>
        </v-flex>
        <v-flex xs5>
          <v-text-field
            v-model="newCombatant.passivePerception"
            type="number"
            min="0"
            label="Passive Perception"
            @keyup.enter="addCombatant()"
          ></v-text-field>
        </v-flex>
        <v-flex x12>
          <v-checkbox
            v-model="newCombatant.isPlayer"
            label="Player Character? (Will Be Saved)"
            @keydown.enter="newCombatant.isPlayer = !newCombatant.isPlayer"
          ></v-checkbox>
        </v-flex>
      </v-layout>
    </v-card-text>
    <v-card-actions class="mt-0 pt-0">
      <v-btn small icon class="green white--text" @click="addCombatant()">
        <v-icon>add</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn small icon class="red white--text" @click="clearCombatantForm()">
        <v-icon>clear</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data: () => {
    return {
      newCombatant: {}
    };
  },

  props: {
    showForm: {
      type: Boolean
    }
  },

  methods: {
    addCombatant() {
      this.$emit("addCombatant", this.newCombatant);
      this.clearCombatantForm();
    },

    clearCombatantForm() {
      this.newCombatant = {
        name: "",
        int: null,
        isPlayer: false
      };
      this.$emit("clearForm");
    }
  }
};
</script>

<style>
</style>
