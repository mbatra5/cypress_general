/// <reference types="Cypress" />

describe('My third test suite', function() 
{

    it('My fourth test case', function() {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice")
        cy.get('#alertbtn').click()
        cy.get('[value="Confirm"]').click()

        //window:alert
        cy.on('window:alert',(str) => {
            
            //Mocha compare strings
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })
       
        cy.get('#opentab').invoke('removeAttr','target').click()
        cy.url().should('include','qaclickacademy')
        cy.go('back')

     })
})