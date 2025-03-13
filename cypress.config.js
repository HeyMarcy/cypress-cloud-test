const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "rkajip",
  video: false,
  defaultCommandTimeout: 10000,
  waitForAnimations: true,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
