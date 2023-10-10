describe("Account", () => {
  beforeEach(() => {
    cy.visit("https://practicesoftwaretesting.com/#/");
    cy.wait(2000);
  });
  it("Register", () => {
    cy.get('[data-test="nav-sign-in"]').click();
    cy.get('[data-test="register-link"]').click();
    cy.get('[data-test="first-name"]').type("Doe");
    cy.get('[data-test="last-name"]').type("John");
    cy.get('[data-test="dob"]').type("1999-10-22");
    cy.get('[data-test="address"]').type("Street test, 10");
    cy.get('[data-test="postcode"]').type("910021");
    cy.get('[data-test="city"]').type("TestCity");
    cy.get('[data-test="state"]').type("TestState");
    cy.get('[data-test="country"]').select("Romania");
    cy.get('[data-test="phone"]').type("0700000000");
    cy.get('[data-test="email"]').type("John.Doe.Demo.Vlad@example.com");
    cy.get('[data-test="password"]').type("JohnDoePass");
    cy.get('[data-test="register-submit"]').click();
  });
  it("Register -> This email address already exists.", () => {
    cy.get('[data-test="nav-sign-in"]').click();
    cy.get('[data-test="register-link"]').click();
    cy.get('[data-test="first-name"]').type("Doe");
    cy.get('[data-test="last-name"]').type("John");
    cy.get('[data-test="dob"]').type("1999-10-22");
    cy.get('[data-test="address"]').type("Street test, 10");
    cy.get('[data-test="postcode"]').type("910021");
    cy.get('[data-test="city"]').type("TestCity");
    cy.get('[data-test="state"]').type("TestState");
    cy.get('[data-test="country"]').select("Romania");
    cy.get('[data-test="phone"]').type("0700000000");
    cy.get('[data-test="email"]').type("John.Doe.Demo.Vlad@example.com");
    cy.get('[data-test="password"]').type("JohnDoePass");
    cy.get('[data-test="register-submit"]').click();
    cy.get('[data-test="register-error"]').should("be.visible");
  });
  it("Login wrong account", () => {
    cy.get('[data-test="nav-sign-in"]').click();
    cy.get('[data-test="email"]').type("John.Doe@example.com");
    cy.get('[data-test="password"]').type("JohnDoe");
    cy.get('[data-test="login-submit"]').click();
    cy.get('[data-test="login-error"]').should("be.visible");
  });
  it("Login real account and Sign Out", () => {
    cy.login();
    cy.get('[data-test="nav-user-menu"]').click();
    cy.get('[data-test="nav-sign-out"]').click();
  });
});
