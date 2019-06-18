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
          <v-text-field v-model="newCombatant.ac" type="number" min="0" label="AC"></v-text-field>
        </v-flex>
        <v-flex xs9></v-flex>
        <v-flex xs5 class="mr-3">
          <v-text-field
            v-model="newCombatant.spellSave"
            type="number"
            min="0"
            label="Spell Save DC"
          ></v-text-field>
        </v-flex>
        <v-flex xs5>
          <v-text-field
            v-model="newCombatant.passivePerception"
            type="number"
            min="0"
            label="Passive Perception"
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
      <v-btn class="green white--text" :disabled="shouldDisable()" @click="addCombatant()">Add</v-btn>
      <v-spacer></v-spacer>
      <v-btn class="red white--text" @click="clearCombatantForm()">Cancel</v-btn>
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
    },

    currentNames: {
      type: Array
    }
  },

  methods: {
    shouldDisable() {
      return !(
        !!this.newCombatant.name &&
        this.newCombatant.name.length > 0 &&
        this.currentNames.indexOf(this.newCombatant.name) === -1
      );
    },

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
