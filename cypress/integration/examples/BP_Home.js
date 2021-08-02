/// <reference types="Cypress" />

describe('BP Home Page', function() 
{
    before(() => {
        cy.visit("https://bp-com-test1.navitas.bpglobal.com/")
    })

    it('Verify Cookie Wall', function() {
        
            cy.get('.nr-cookie-notification__cta-button').click() 
            .get('.nr-cookie-notification__title').should('not.be.visible')
    })

    it('Verify Search Suggestions', () => {
        cy.get('.nr-icon-search-2').click()
            .get('#q').type('cas')
            .wait(3000)
            
    })

    it('Verify Search Results Page', () => {
        cy.get('.nr-search-popup-suggestions').invoke('show')
        .contains('View').click()
        .get('.nr-cookie-notification__cta-button').click() 
        .url().should('include','search-results')
        .wait(6000)
            
    })

    it('Click Logo & Redirect to Home Page', () => {
        cy.get('.nr-navigation__logo').click()
            .url().should('be','https://bp-com-test1.navitas.bpglobal.com/')
            .get('.nr-cookie-notification__cta-button').click() 
            
    })

    it('Site Tunnel', () => {

            cy.contains('Worldwide').click()
           //   .get('.nr-overlay').invoke('show').
        //   .get('.nr-overlay').xpath('//input[@id="search"]').type('Uni',{ release: false },{ force: true })
       //       .get('#search').type('Uni')
         //     .wait(3000)
         //     .get('.nr-sitetunnel__search-dropdown > a:nth-child(1)').click()
            .get('.nr-overlay').contains('Europe').click()
            .get('[href="/en_gb/united-kingdom/home.html"]').click() 
                 
       }
    )

    it('Navigate to UK Site', function() {
        
        cy.url().should('include' ,'/en_gb/united-kingdom')
    })
}
)