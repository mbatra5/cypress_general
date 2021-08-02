/// <reference types="Cypress" />

describe('API Test',() => 
{
    it('Fake API Test', () => {
        
            cy.visit('https://example.cypress.io/commands/network-requests')
            cy.server()
            .route(
                {
                    method: 'PUT',
                    url: 'comments/*',
                    status: 404,
                    response: {
                        error: "Comment doesn't exit"
                    },
                    delay: 1000  
                }).as('UpdateComment')
            cy.get('.network-put').click()
            cy.get('.network-put-comment').should('contain',"Comment doesn't exit")
                
    })
})