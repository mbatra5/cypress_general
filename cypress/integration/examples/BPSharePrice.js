/// <reference types="Cypress" />


describe('SharePrice API Test',() => 
{
    it('SharePrice throws 404', function()  {  
        cy.server()
        .route(
            {
                method: 'GET',
                url: '/SharePriceFeed*',
                status: 400,
                response: {
                    error: "Learn More",
                },
                delay: 1000  
            }).as('sharePrice')

            cy.visit('https://bp-com-test1.navitas.bpglobal.com/countries/en/global/home.html') 
            
            cy.get('.nr-cookie-notification__cta-button').click()
            cy.wait('@sharePrice')
            cy.get('.nr-navigation__footer > .nr-navigation__shareprice').trigger('mouseover')
            cy.get('.nr-navigation__footer > .nr-navigation__shareprice').should('contain',"error message")                              
})
})
