/// <reference types="Cypress" />

import HomePage from '../../support/pageObjects/HomePage'
import ProductPage from '../../support/pageObjects/ProductPage'

describe('Grab Attr. Value', function() 
{
  //All fixtures should be added in the before hook, the setup related work  
  before(function(){
      cy.fixture('example').then(function(data)
      {  
          this.data=data
      })

    })
  
    it('Framework', function() {
        
       // Cypress.config('defaultCommandTimeout',8000)

        const homePage = new HomePage()
        const productPage =  new ProductPage()
        cy.visit("https://rahulshettyacademy.com/angularpractice/")
        homePage.getEditBox().type(this.data.name)
        homePage.getGender().select(this.data.gender)   
        homePage.getTwoWayDataBinding().should('have.value',this.data.name) 
        homePage.getEditBox().should('have.attr','minlength','2')
        homePage.getEntreprenaur().should('be.disabled')
        homePage.getShopTab().click()
       
    //Pulling value from example.json, creating an array

        this.data.productName.forEach(element => 
          
          cy.selectProduct(element)
          );
     
          productPage.getCheckoutButton().click()
          cy.contains('Checkout').click()
          cy.get('#country').type('India')
          cy.get('.suggestions > ul > li > a').click()
          cy.get('.checkbox').click()
          cy.get('input[type="submit"]').click()
          cy.get('.alert').should('contain.text', 'Success! Thank you! Your order will be delivered in next few weeks :-).')
          
})
}
)
