/// <reference types="Cypress" />

describe('My first test suite', function() 
{

    it('My first test case', function() {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise")
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        cy.get('.product:visible').should('have.length',4)
        
        // Parent child
        cy.get('.products').find('.product').should('have.length',4)
        
        cy.get('.products').as('productLocator')
        //Select 2nd product
        cy.get('@productLocator').find('.product').eq(2).contains('ADD TO CART').trigger('mouseover')
        
        //find a product without hard coding the index
        cy.get('.products').find('.product').each(($e1, index, $list)=> {
         
            const textVeg=$e1.find('h4.product-name').text()
            if(textVeg.includes('Cashews'))
            {
                $e1.find('button').click()
            }   
        }
    )
        //assert if logo text is correctly displayed
        cy.get('.brand').should('have.text','GREENKART')

    cy.get('.brand').then(function(logoelement)
    {
        cy.log(logoelement.text())

    }   )


     }
    )


}
)