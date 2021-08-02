/// <reference types="Cypress" />

describe('My second test suite', function() 
{

    it('My second test case', function() {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise")
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
      
        
        cy.get('.products').as('productLocator')
       
        //find a product without hard coding the index
        cy.get('.products').find('.product').each(($e1, index, $list)=> {
         
            const textVeg=$e1.find('h4.product-name').text()
            if(textVeg.includes('Cashews'))
            {
                $e1.find('button').click()
            }   
        }
    )
        //Click add to bag
        cy.get('.cart-icon').click()
        cy.contains('PROCEED TO CHECKOUT').click()

        
     }
    )
}
)