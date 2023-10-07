// cypress - Spec

/// <reference types="Cypress" />

/*
Test zavislosti poli "currency" a "deposit"

Pred samotnym testem nastavena funkce, ktera osetri chybu formulare, aby to nepadalo,
a otevre stranku s formularem
*/

function visitWithoutError() {

  cy.on('uncaught:exception', (err, runnable) => {
      
      expect(err.message).to.include('Cannot use e "__Schema" from another module or realm.')
  
      // using mocha's async done callback to finish
      // this test so we prove that an uncaught exception
      // was thrown
      //done()
  
      // return false to prevent the error from
      // failing this test
      
      return false
    })

    cy.visit('https://revolgy-forms-case-study-master.staging.axiory.com/jp/registration/demo')
    
  }


describe('Test currency and deposit', function()      // popis a funkce
{  
    it('Test case JPY', function() {

      visitWithoutError()
          
      cy.get('#currency').select('JPY')
      cy.get('#deposit').should('have.attr', 'min', '1000')
      cy.get('#deposit').should('have.attr', 'max', '10000000')
                    
      })    
        
    it('Test case USD', function() {
        
      visitWithoutError()
      
      cy.get('#currency').select('USD')
      cy.get('#deposit').should('have.attr', 'min', '6.7')
      cy.get('#deposit').should('have.attr', 'max', '67020')
      
    })

    it('Test case EUR', function() {
      
      visitWithoutError()
          
      cy.get('#currency').select('EUR')
      cy.get('#deposit').should('have.attr', 'min', '6.3')
      cy.get('#deposit').should('have.attr', 'max', '63310')
     
    })

  })