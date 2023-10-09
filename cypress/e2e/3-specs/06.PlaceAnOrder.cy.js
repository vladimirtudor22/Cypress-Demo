const ids = [];
describe("HomePage", () => {
  beforeEach(() => {
    cy.visit("https://practicesoftwaretesting.com/#/");
    cy.wait(2000);
    cy.get('[data-test*="product"]').then(async ($elements) => {
      $elements.each((index, element) => {
        const productId = Cypress.$(element).attr("data-test");
        ids.push(productId);
      });
    });
  });

  it("Can place an order", () => {
    cy.login();
    cy.visit("https://practicesoftwaretesting.com/#/");
    cy.get(
      `[data-test="${ids[0]}"] > .card-img-wrapper > .card-img-top`
    ).click();
    cy.get('[data-test="add-to-cart"]').click();
    cy.get('[data-test="nav-cart"] > .fa').click();
    cy.get('[data-test="proceed-1"]').click();
    cy.get('[data-test="proceed-2"]').click();
    cy.get('[data-test="proceed-3"]').click();
    cy.get('[data-test="payment-method"]').select("Gift Card");
    cy.get('[data-test="account-name"]').type("John Doe");
    cy.get('[data-test="account-number"]').type("John Doe");
    cy.get('[data-test="finish"]').click();
    cy.get(".help-block").should("contain", "Payment was successful");
  });
});
