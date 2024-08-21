const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  retries: {
    runMode: 2, // Number of retries when running `cypress run`
    openMode: 2, // Number of retries when running `cypress open`
  },
});
