import { defineConfig } from "cypress";

export default defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
   baseUrl:"http://uitestingplayground.com",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    env:{
      demoVar : "Environment Variables",
      demoQA: "https://demoqa.com",
    }
  },

 //defaultCommandTimeout: 25000
  
});
