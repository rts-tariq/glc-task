const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    // assuming your test files are directly inside the e2e folder and have .cy.js extension
    specPattern: 'cypress/e2e/*.cy.js',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
