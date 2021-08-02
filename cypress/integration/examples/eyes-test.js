/// <reference types="Cypress" />
/// <reference types="@applitools/eyes-cypress"/>

const brand = "BP";
const TestName = "BP Cookie Modal"
const execution_type = "desktop"
const scriptHook = 'if(navigator.userAgent.search("Firefox") != -1) {document.querySelector(".nr-cookie-notification__wall").style.height="10000px"};document.querySelector(".slick-slide").style.width = "100%";document.querySelector(".slick-track").style.width = "100%"'

describe(TestName, function() 
{
    before(function()  {
        cy.eyes_setup(brand,TestName,execution_type)
 /*      
        cy.fixture('location').then(function(data)
        {  
            this.data=data
        }) */
    }) 
    
    it('BP Cookie Modal', function() {
        cy.visit('https://www.bp.com')
        cy.scrollTo("bottom",{ duration: 4000 })
        cy.makeScreenshotWithHook("Home page",scriptHook)
    })

    it('Cookie Modal Opens', function() {
  
        cy.get('.nr-cookie-notification__cta-link').click()
        cy.get('.nr-overlay').invoke('show').scrollTo("bottom",{ duration: 4000 })
        .scrollTo("top")
        cy.makeScreenshot("Cookie Modal Opens")
    })

    it('Cookie Modal Closes', function() {
        cy.get('.nr-overlay__close').click({force:true})
        cy.makeScreenshotWithHook("Cookie Modal Closes",scriptHook)
    })

    it('Change Cookie Toggles',function(){
        cy.get('.nr-cookie-notification__cta-link').click({force:true})
        
        cy.get('.nr-cookie-preferences__cta-button',{ timeout: 10000 }).should('be.visible')
        
        cy.xpath("//input[@data-cookie-type='performance']/following-sibling::span[@class='nr-cookie-preferences__slider']").click({force:true})

        cy.xpath("//input[@data-cookie-type='advertising']/following-sibling::span[@class='nr-cookie-preferences__slider']").click({force:true})
        cy.get('.nr-overlay').invoke('show').scrollTo("bottom",{ duration: 4000 })
        .scrollTo("top")
        cy.makeScreenshot("Toggles Changed")
    })

    it('Save Changes',function(){
        cy.get('.nr-cookie-preferences__cta-button').click({force:true})
        cy.makeScreenshotWithHook("Changes Saved",scriptHook)
    }) 
    
    after(function() {
        cy.eyesClose()
    })
})