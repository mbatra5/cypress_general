/// <reference types="Cypress" />

describe('My third test suite', function() 
{

    it('My third test case', function() {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice")
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked').and('have.value','option1')
        cy.get('input[type="checkbox"]').check(['option2','option3'])

        // Static Dropwdown
        cy.get('select').select('option2').should('have.value','option2')

        // Dynamic Dropdown 
        cy.get('#autocomplete').type('ind')
        cy.get('.ui-menu-item div').each(($e1, index, $list)=> {
         
            if($e1.text()==="India")
            {
                $e1.click()
            }   
        }
    )
        cy.get('#autocomplete').should('have.value','India')

        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
        cy.get('#hide-textbox').click()

        //Radio Button
        cy.get('[value="radio2"]').check().should('be.checked')
     })
})