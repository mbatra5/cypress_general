/// <reference types="Cypress" />

describe("AEM Page Creation", function () {
  before(function () {
    cy.fixture("example").then(function (data) {
      this.data = data;
    });
  });

  it("AEM Page Creation", function () {
    cy.visit(
      "https://author-cq-test1.navitas.bpglobal.com/sites.html/content/bp-test/countries/en/global"
    );
    cy.get("#username").type("madhur.batra@akqa.com");
    cy.get("#password").type("Password1!", { log: false });
    cy.get("#submit-button").click();
    //  cy.title().should('eq', 'AEM Sites')

    cy.get(
      ".granite-collection-create.foundation-toggleable-control.coral3-Button.coral3-Button--primary"
    ).click();
    cy.contains("Page").click();
    cy.wait(2000);
    cy.contains("Navitas").click();
    cy.get(
      ".is-selected > coral-panel-content > .foundation-layout-inline2 > .coral3-Button--primary > coral-button-label"
    ).click();
    cy.get('input[name*="jcr:title"]').click().type("New Homepage");
    cy.get('input[name*="pageName"]').click().type("new-homepage");
    cy.get('button[type="submit"]').click();
    cy.wait(1000);
    cy.contains("Done").click({ force: true });
  });
});
