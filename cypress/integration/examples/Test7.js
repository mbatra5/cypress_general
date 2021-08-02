/// <reference types="Cypress" />

describe('My fourth test suite', function() 
{

    it('Mouse Over', function() {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice")
          .get('.mouse-hover-content').invoke('show')
          .contains('Top').click()
          .url().should('include','top')
})
}
)