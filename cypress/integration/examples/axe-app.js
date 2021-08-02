/// <reference types="Cypress" />

describe("Accessibility Test", function () {
  beforeEach(() => {
    cy.visit("https://www.castrol.com");
    cy.get(".nr-cookie-notification__cta-button").click();
    cy.injectAxe();
  });
  it("Accessibility", function () {
    cy.allure().step("Check whole page");
    cy.checkA11y();
  });

  it("Exluding site tunnel", function () {
    cy.checkA11y({ exclude: [".nr-sitetunnel"] });
  });

  it("Test Only Footer", function () {
    cy.checkA11y(".nr-footer__wrapper");
  });

  it("Include only P1, P2 issues", function () {
    cy.checkA11y(null, { includedImpacts: ["critical", ["serious"]] });
  });

  it("Exclude specific rule for footer", function () {
    cy.checkA11y(".nr-footer__wrapper", {
      rules: {
        "aria-required-parent": { enabled: false },
        "landmark-complementary-is-top-level": { enabled: false },
      },
    });
  });
});
