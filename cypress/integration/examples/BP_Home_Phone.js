/// <reference types="Cypress" />

describe('BP Home Page', function() 
{

    it('BP Home Page', function() {
        cy.viewport('ipad-mini')
          .wait(2000)
        cy.visit("https://bp-com-test1.navitas.bpglobal.com/")
            .get('.nr-cookie-notification__cta-button').click()
            
            .get('.nr-cookie-notification__title').should('not.be.visible')
            cy.get('.nr-navigation__search-btn').click()
            cy.get('#nr-navigation-search').type('cas')
            .wait(6000)

            cy.viewport('iphone-x')
               .reload()
          .wait(2000)
      //  cy.visit("https://bp-com-test1.navitas.bpglobal.com/")
            .get('.nr-cookie-notification__cta-button').click()
            
            .get('.nr-cookie-notification__title').should('not.be.visible')
            cy.get('.nr-navigation__search-btn').click()
            cy.get('#nr-navigation-search').type('cas')
            .wait(6000)
 //           .get('.nr-search-popup-suggestions').invoke('show')
   //         .contains('View').click()
 //           .url().should('include','search-results')
  //          .get('.nr-navigation__logo').click()
  //          .url().should('be','https://bp-com-test1.navitas.bpglobal.com/')
  //          cy.contains('Worldwide').click()
          //  .get('.nr-overlay').invoke('show')
         //   .get('#search').type('U')
  //          .contains('Europe').click()      
       
       }
    )


}
)