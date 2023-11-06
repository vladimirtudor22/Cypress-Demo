describe("Navigation Bar", () => {
  beforeEach(() => {
    cy.visit("https://practicesoftwaretesting.com/#/");
    cy.wait(2000);
  });
  it("Should be able to navigate to Home", () => {
    cy.get('[data-test="nav-home"]').click();
    cy.url().should("include", "/#");
  });
  it("Should be able to navigate to Hand Tools", () => {
    cy.get('[data-test="nav-categories"]').click();
    cy.get('[data-test="nav-hand-tools"]').click();
    cy.url().should("include", "/category/hand-tools");
  });

  it("Should be able to navigate to power tools", () => {
    cy.get('[data-test="nav-categories"]').click();
    cy.get('[data-test="nav-power-tools"]').click();
    cy.url().should("include", "/category/power-tools");
  });
  it("Should be able to navigate to special tools", () => {
    cy.get('[data-test="nav-categories"]').click();
    cy.get('[data-test="nav-special-tools"]').click();
    cy.url().should("include", "/category/special-tools");
  });
  it("Should be able to navigate to rentals", () => {
    cy.get('[data-test="nav-categories"]').click();
    cy.get('[data-test="nav-rentals"]').click();
    cy.url().should("include", "/rentals");
  });
  it("Should be able to navigate to sign in", () => {
    cy.get('[data-test="nav-sign-in"]').click();
    cy.url().should("include", "/auth/login");
  });
  it("Should be able to navigate to contact", () => {
    cy.get('[data-test="nav-contact"]').click();
    cy.url().should("include", "/contact");
  });
});
