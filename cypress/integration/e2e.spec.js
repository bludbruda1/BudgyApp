/// <reference types="cypress" />
const testUrl = Cypress.env("budgyUrl");

beforeEach(() => {
  cy.visit(testUrl);
});

describe("Regression tests", () => {
  it("Fills out a budget and calculates correctly", () => {
    cy.get("#total-pay").type("1000");
    cy.get("#pay-frquency").click();
    cy.get('[data-value="Fortnightly"]').click();
    cy.get("#mui-1").type("Groceries");
    cy.get('[name="expense"]').type("200");
    cy.contains("Calculate").click();
    cy.get("#total-amount").should("have.text", "Total pay remaining: $800");
    cy.matchImageSnapshot();
  });

  it("Adds a set of fields", () => {
    cy.get('[aria-label="add"]').click();
    cy.matchImageSnapshot();
  });

  it("Deletes a set of fields", () => {
    cy.get('[aria-label="add"]').click();
    cy.get('[data-testid="DeleteIcon"]').eq(1).click();
    cy.matchImageSnapshot();
  });

  it("Calculates decimals correctly in the total amount", () => {
    cy.get("#total-pay").type("10");
    cy.get("#pay-frquency").click();
    cy.get('[data-value="Fortnightly"]').click();
    cy.get("#mui-1").type("Groceries");
    cy.get('[name="expense"]').type("2.25");
    cy.contains("Calculate").click();
    cy.get("#total-amount").should("have.text", "Total pay remaining: $7.75");
    cy.matchImageSnapshot();
  });
});
