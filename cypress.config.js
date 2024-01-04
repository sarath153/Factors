const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "odtvtn",
  experimentalStudio: true,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
