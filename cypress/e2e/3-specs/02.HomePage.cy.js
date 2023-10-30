describe("HomePage", () => {
  beforeEach(() => {
    cy.visit("https://practicesoftwaretesting.com/#/");
    cy.wait(2000);
  });
  it("Apply filters and sort", () => {
    cy.get('[data-test="sort"]').select("Name (A - Z)");
    cy.get(".ngx-slider-model-high").contains("100");
    cy.get(".ngx-slider-full-bar > .ngx-slider-span").click({
      multiple: true,
      force: true,
    });
    cy.get(".ngx-slider-model-high").should("contain", "100");
    cy.get(":nth-child(13) > ul > :nth-child(1) > label").click();
    cy.get(":nth-child(13) > ul > :nth-child(2) > label").click();
    cy.get(":nth-child(14) > ul > :nth-child(1) > label").click();
    cy.get(":nth-child(14) > ul > :nth-child(2) > label").click();
    cy.get(":nth-child(18) > label").click();
  });
  it("Should be able to press on first product and go back", () => {
    var ids = [];
    cy.get('[data-test*="product"]').then(($elements) => {
      $elements.each((index, element) => {
        const productId = Cypress.$(element).attr("data-test");
        ids.push(productId);
      });
      console.log(ids);
      cy.get(
        `[data-test="${ids[0]}"] > .card-img-wrapper > .card-img-top`
      ).click();
      cy.go("back");
      cy.get(
        `[data-test="${ids[0]}"] > .card-img-wrapper > .card-img-top`
      ).should("be.visible");
    });
  });
  it("Should be able to navigate between pages", () => {
    cy.get(".ngx-pagination > :nth-child(4) > a").click();
    cy.get(".ngx-pagination > :nth-child(5) > a").click();
    cy.get(".ngx-pagination > :nth-child(3) > a").click();
  });
});
