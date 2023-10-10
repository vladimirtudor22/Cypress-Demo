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
  it("First Product must match description and name with backend", async () => {
    cy.get(
      `[data-test="${ids[0]}"] > .card-img-wrapper > .card-img-top`
    ).click();
    let id = `${ids[0]}`.substring(8);
    let response = await fetch(
      `https://api.practicesoftwaretesting.com/products/${id}`,
      {
        cache: "default",
        credentials: "omit",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Accept-Language": "en-GB,en;q=0.9",
          "Content-Type": "application/json",
          "User-Agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Safari/605.1.15",
        },
        method: "GET",
        mode: "cors",
        redirect: "follow",
        referrer: "https://practicesoftwaretesting.com/",
        referrerPolicy: "strict-origin-when-cross-origin",
      }
    );
    cy.get('[data-test="product-name"]').should("contain", response.name);
    cy.get('[data-test="product-description"]').should(
      "contain",
      response.description
    );
  });
  it("Second Product must match description and name with backend", async () => {
    cy.get(
      `[data-test="${ids[1]}"] > .card-img-wrapper > .card-img-top`
    ).click();
    let id = `${ids[1]}`.substring(8);
    let response = await fetch(
      `https://api.practicesoftwaretesting.com/products/${id}`,
      {
        cache: "default",
        credentials: "omit",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Accept-Language": "en-GB,en;q=0.9",
          "Content-Type": "application/json",
          "User-Agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Safari/605.1.15",
        },
        method: "GET",
        mode: "cors",
        redirect: "follow",
        referrer: "https://practicesoftwaretesting.com/",
        referrerPolicy: "strict-origin-when-cross-origin",
      }
    );
    cy.get('[data-test="product-name"]').should("contain", response.name);
    cy.get('[data-test="product-description"]').should(
      "contain",
      response.description
    );
  });
  it("Can increase/decrease quantity of product", () => {
    cy.get(
      `[data-test="${ids[0]}"] > .card-img-wrapper > .card-img-top`
    ).click();
    cy.get('[data-test="increase-quantity"]').click();
    cy.get('[data-test="increase-quantity"]').click();
    cy.get('[data-test="quantity"]').should("have.value", 3);
    cy.get('[data-test="decrease-quantity"]').click();
    cy.get('[data-test="quantity"]').should("have.value", 2);
  });
  it("Can add product to cart", () => {
    cy.get(
      `[data-test="${ids[0]}"] > .card-img-wrapper > .card-img-top`
    ).click();
    cy.get('[data-test="add-to-cart"]').click();
    cy.get(".toast-body").should("contain", "Product added to shopping cart.");
  });
  it("Can't add product to favourites (Not Loged In)", () => {
    cy.get(
      `[data-test="${ids[0]}"] > .card-img-wrapper > .card-img-top`
    ).click();
    cy.get('[data-test="add-to-favorites"]').click();
    cy.get(".toast-body").should(
      "contain",
      "Unauthorized, can not add product to your favorite list."
    );
  });
  it("Can add product to favourites", () => {
    cy.login();
    cy.visit("https://practicesoftwaretesting.com/#/");
    cy.get(
      `[data-test="${ids[0]}"] > .card-img-wrapper > .card-img-top`
    ).click();
    cy.get('[data-test="add-to-favorites"]').click();
    cy.get(".toast-body").should("contain", "favorite");
  });
});
