/// <reference types="Cypress" />

describe('My first test suite', function() 
{

    it('AEM Page Creation', function() {
        cy.visit("https://author-cq-test1.navitas.bpglobal.com/editor.html/content/bp-test/countries/en/global/new-homepage.html")
        cy.get('#username').type('madhur.batra@akqa.com')
        cy.get('#password').type('Password1!', { log: false })
        cy.get('#submit-button').click()
        cy.title().should('eq', 'New Homepage')
        cy.wait(4000)
        cy.screenshot()
        cy.get('.cq-Overlay[data-text="Drag components here"]').click()
        cy.get('button[title="Insert component"]').click()
        
    //    cy.get('input[placeholder="Enter Keyword"]').should('be.visible')
    //    cy.get('input[placeholder="Enter Keyword"]').type('Geo',{force:true})
       cy.get('.coral3-SelectList-item').each(($e1, index, $list)=> {
         
           if($e1.text()==="Geo Banner")
          {
               $e1.click()
            }   
       }
  )
       cy.reload()
       cy.wait(4000)
       cy.screenshot()
       cy.get('div[title="Geo Banner"]').dblclick()
    
       cy.get('.coral3-Dialog-wrapper > .coral-Form--vertical > .coral3-Dialog-header > .coral3-Dialog-title > .cq-dialog-header > .cq-dialog-actions > .cq-dialog-submit').click({force:true}) 
       cy.screenshot()

       
  //  cy.get('')
       //    cy.get('.is-open > .coral3-Dialog-wrapper > .coral3-Dialog-header > .coral3-Button > .coral3-Icon').click()
     //   
     //   cy.contains('Geo').click()

       
      //  cy.get('[class*="Dialog--success"] button[variant="secondary"]').click()
       
        
  //    .coral3-Dialog.InsertComponentDialog.coral3-Dialog--closable.is-open > .coral3-Dialog-wrapper > .coral3-Dialog-header > button        
 // .is-open > .coral3-Dialog-wrapper > .coral3-Dialog-header > .coral3-Button > .coral3-Icon

// test steps

     }
    )


}
)