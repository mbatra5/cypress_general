/// <reference types="Cypress" />
//Remove target attributes
//Cross domains are not accepted by cypress
describe('Grab Attr. Value', function() 
{

    it('Attribute', function() {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice")
          .get('#opentab').then(function(e1){
              const url=e1.prop('href')
              cy.log(url)
                .visit(url) //Visit method doesn't accpet any superdomain
})
}
)
})