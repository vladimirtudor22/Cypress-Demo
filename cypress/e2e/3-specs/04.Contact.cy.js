describe("Contact", () => {
  beforeEach(() => {
    cy.visit("https://practicesoftwaretesting.com/#/contact");
    cy.wait(2000);
  });
  it("Message shorther", () => {
    cy.get('[data-test="first-name"]').type("Doe");
    cy.get('[data-test="last-name"]').type("John");
    cy.get('[data-test="email"]').type("John.Doe@example.com");
    cy.get('[data-test="subject"]').select("Webmaster");
    cy.get('[data-test="message"]').type(
      "This is a test message.\n Ignore it."
    );
    cy.get('[data-test="contact-submit"]').click();
    cy.get('[data-test="message-error"]').should(
      "contain",
      "Message must be minimal 50 characters"
    );
  });
  it("No firstname", () => {
    cy.get('[data-test="last-name"]').type("John");
    cy.get('[data-test="email"]').type("John.Doe@example.com");
    cy.get('[data-test="subject"]').select("Webmaster");
    cy.get('[data-test="message"]').type(
      "This is a test message.\n Ignore it.\n Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nisl arcu, mattis vel ex in, interdum dictum metus."
    );
    cy.get('[data-test="contact-submit"]').click();
    cy.get('[data-test="first-name-error"]').should("be.visible");
  });
  it("No lastName", () => {
    cy.get('[data-test="first-name"]').type("Doe");
    cy.get('[data-test="email"]').type("John.Doe@example.com");
    cy.get('[data-test="subject"]').select("Webmaster");
    cy.get('[data-test="message"]').type(
      "This is a test message.\n Ignore it.\n Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nisl arcu, mattis vel ex in, interdum dictum metus."
    );
    cy.get('[data-test="contact-submit"]').click();
    cy.get('[data-test="last-name-error"]').should("be.visible");
  });
  it("No email", () => {
    cy.get('[data-test="first-name"]').type("Doe");
    cy.get('[data-test="last-name"]').type("John");
    cy.get('[data-test="subject"]').select("Webmaster");
    cy.get('[data-test="message"]').type(
      "This is a test message.\n Ignore it.\n Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nisl arcu, mattis vel ex in, interdum dictum metus."
    );
    cy.get('[data-test="contact-submit"]').click();
    cy.get('[data-test="email-error"]').should("be.visible");
  });
  it("No subject", () => {
    cy.get('[data-test="first-name"]').type("Doe");
    cy.get('[data-test="last-name"]').type("John");
    cy.get('[data-test="email"]').type("John.Doe@example.com");
    cy.get('[data-test="message"]').type(
      "This is a test message.\n Ignore it.\n Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nisl arcu, mattis vel ex in, interdum dictum metus."
    );
    cy.get('[data-test="contact-submit"]').click();
    cy.get('[data-test="subject-error"]').should("be.visible");
  });
  it("Shoud be able to send a message with contact form", () => {
    cy.get('[data-test="first-name"]').type("Doe");
    cy.get('[data-test="last-name"]').type("John");
    cy.get('[data-test="email"]').type("John.Doe@example.com");
    cy.get('[data-test="subject"]').select("Webmaster");
    cy.get('[data-test="message"]').type(
      "This is a test message.\n Ignore it.\n Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nisl arcu, mattis vel ex in, interdum dictum metus."
    );
    cy.get('[data-test="contact-submit"]').click();
    cy.get(".alert").should(
      "contain",
      "Thanks for your message! We will contact you shortly."
    );
  });
});
