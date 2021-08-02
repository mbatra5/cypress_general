/// <reference types="Cypress" />

const sizes = [[1920,1080],'iphone-x', 'ipad-mini', ['ipad-mini',"landscape"],[1024, 768],'macbook-15','samsung-note9',
                [2560,1440],'macbook-11']

describe('Cookie', () => {
    
    before(function(){
        cy.visit("https://castrol-com-test1.navitas.bpglobal.com/castrol-vct/ar_ae/global/home1/site-tunnel.html?q=67",{failOnStatusCode: false})
      })

  sizes.forEach((size) => {
    // an array of different viewports
    it(`Should display Cookie on ${size} screen`, () => {
      if (Cypress._.isArray(size)) {
        cy.viewport(size[0], size[1])
          .wait(3000)
      } else {
        cy.viewport(size)
          .wait(3000)
      }
       cy.get('.nr-cookie-notification__cta-link').click()
       cy.get('.nr-overlay').invoke('show').scrollTo("bottom",{ duration: 4000 })
         .scrollTo("top",{ duration: 4000 })
    })
  })

  afterEach(function(){
         cy.get('.nr-overlay').invoke('show')
           .get('.nr-overlay__close > .nr-icon').click()
           .wait(2000)
  })
})

/* describe('BP Home Page', function() 
{
    it('Test Cookies', function() {
        
        cy.visit("https://bp-com-dev1.navitas.bpglobal.com/")
            .get('.nr-cookie-notification__cta-link').click()
            .get('.nr-overlay').invoke('show').scrollTo("bottom",{ duration: 4000 })
            .scrollTo("top",{ duration: 4000 })
            .wait(6000)
            .viewport('ipad-mini',"landscape")
            .wait(6000)
            .viewport('iphone-x')
            .wait(6000)
            .viewport('macbook-15')
            .wait(6000)
            .viewport('macbook-11')
            .wait(6000)
            .viewport('iphone-6+')
            .wait(6000)
            .viewport(1920,1080)
            .wait(6000)
            .viewport(2560,1440)
            .wait(6000)
            .viewport('samsung-note9')
            .wait(6000)
       
       }
    )
}
)*/