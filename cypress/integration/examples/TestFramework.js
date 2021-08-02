/// <reference types="Cypress" />

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
        cy.visit("https://rahulshettyacademy.com/angularpractice/")
          .get('input[name="name"]:nth-child(2)').type(this.data.name)
          .get('select').select(this.data.gender)  
          .get('input[name="name"]:nth-child(1)').should('have.value',this.data.name) 
          .get('input[name="name"]:nth-child(2)').should('have.attr','minlength','2')
          .get('#inlineRadio3').should('be.disabled')
          .pause()
          .get(':nth-child(2) > .nav-link').click().debug()
         
          //Custom Command Created
    //      .selectProduct('Blackberry')
    //      .selectProduct('Nokia Edge')
       
    //Pulling value from example.json, creating an array

        this.data.productName.forEach(element => 
          
          cy.selectProduct(element)
          );
          cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link').scrollIntoView()
          
})
}
)