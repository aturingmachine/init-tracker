<template>
  <div class="quick-command-container">
    <input
      id="command-input"
      v-model="commandQuery"
      placeholder="Begin Typing A Command"
      class="quick-command-input"
      autocomplete="off"
      @keyup.enter="execute()"
      @keyup.esc="close()"
      @keyup.arrow-down="incrementIndex()"
      @keyup.arrow-up="decrementIndex()"
    />
    <div
      v-for="(command, index) in matchedResults"
      :key="command.code + command.name + command.params.id"
      :class="`${getResultClass(index)} command`"
      @click="executeCommand(command)"
    >{{ command.name }}</div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      commandQuery: "",
      selectedIndex: 0,
    };
  },

  watch: {
    commandQuery() {
      this.resetIndex();
    },
  },

  computed: {
    matchedResults: function() {
      if (this.commandQuery.length === 0) {
        return this.commands.slice(0, 7);
      }

      return this.commands.filter((command) => {
        return (
          command.name
            .toLowerCase()
            .includes(this.commandQuery.toLowerCase()) ||
          command.code
            .toLowerCase()
            .includes(this.commandQuery.toLowerCase()) ||
          this.commandQuery
            .split(" ")
            .every((str) =>
              command.name.toLowerCase().includes(str.toLowerCase())
            )
        );
      });
    },
  },

  props: {
    fullList: {
      type: Array,
    },
    commands: {
      type: Array,
    },
  },

  methods: {
    execute() {
      const selectedCommand = this.matchedResults[this.selectedIndex];
      this.$emit("execute", selectedCommand.code, selectedCommand.params);
    },

    executeCommand(command) {
      this.$emit("execute", command.code, command.params);
    },

    close() {
      this.$emit("close");
    },

    resetIndex() {
      this.selectedIndex = 0;
    },

    incrementIndex() {
      if (
        this.selectedIndex == this.matchedResults.length - 1 ||
        this.matchedResults.length == 0
      ) {
        this.selectedIndex = 0;
      } else {
        this.selectedIndex++;
      }
    },

    decrementIndex() {
      if (this.selectedIndex == 0) {
        this.selectedIndex = this.matchedResults.length - 1;
      } else {
        this.selectedIndex--;
      }
    },

    getResultClass(index) {
      return this.selectedIndex === index
        ? "selected-command"
        : "unselected-command";
    },
  },

  mounted() {
    document.getElementById("command-input").focus();
  },
};
</script>

<style>
.quick-command-container {
  background-color: gainsboro;
}

.quick-command-input {
  width: 100%;
  padding: 4px 16px;
  margin-bottom: 4px;
  border: 2px darkgray solid;
}

.command {
  padding: 4px 16px;
  cursor: pointer;
}

.command:hover {
  background-color: slategray;
  color: white;
  border-radius: 8px;
}

.selected-command {
  background-color: dimgrey;
  color: white;
  border-radius: 8px;
}

.unselected-command {
  background-color: gainsboro;
}
</style>
