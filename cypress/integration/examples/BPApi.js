/// <reference types="Cypress" />

describe('BP API Test',() => 
{
    beforeEach(function(){
        cy.clearLocalStorage()
        cy.clearCookies()
        cy.visit('https://bp-com-test1.navitas.bpglobal.com/countries/en/global/home.html')
        
    })
    
    before(function() {
        cy.fixture('location').then(function(data)
        {  
            this.data=data
        })
      })

    it('Current Location Geobanner', function()  {
        
            cy.mockGeolocation(this.data.latitude, this.data.longitude)
            cy.log(this.data.latitude)
            cy.log(this.data.longitude)        
      //      const lat = this.data.latitude
     //       cy.wrap(lat).should('eq',this.data.latitude)                         
            cy.get('.nr-cookie-notification__cta-button').click()
              .wait(5000)
              .get('.nr-geobanner__title').should('contain',"India Geobanner")                              
    })

    it('Mock Geobanner with Random coordinates', function()  {

        cy.mockGeolocation(1, 1)       
        cy.server()
        .route(
            {
                method: 'GET',
                url: '*geobanner*',
                status: 200,
                response: {
                    ctaText: "Learn More",
                    title: "Mock",
                    text: "Mock Geobanner"
                },
                delay: 1000  
            }).as('geobanner')
            
            cy.get('.nr-cookie-notification__cta-button').click()
            cy.wait('@geobanner')
            cy.get('.nr-geobanner__title').should('contain',"Mock")                              
})
})