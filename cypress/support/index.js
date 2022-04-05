// Import commands.js using ES2015 syntax:
import "./commands";

// eslint-disable-next-line no-unused-vars
Cypress.on("uncaught:exception", (err, runnable) => {
  // returning false here prevents Cypress from failing the test
  return false;
});
