// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
Cypress.Commands.add("login", () => {
  cy.get('[data-test="nav-sign-in"]').click();
  cy.get('[data-test="email"]').type("John.Doe@example.com");
  cy.get('[data-test="password"]').type("JohnDoePass");
  cy.get('[data-test="login-submit"]').click();
  cy.get('[data-test="nav-user-menu"]').contains("Doe John");
});
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
