/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />
//Install iFrame plugin to handle plugins
//npm install -D cypress-iframe
import 'cypress-iframe'

describe('Frames', function() 
{

    it('Frames', function() {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice")
            .frameLoaded('#courses-iframe')
            .iframe().find("a[href*='mentorship']").eq(0).click()
            .iframe().find("h1[class*='pricing-title']").should('have.length',2)

})
}
)
