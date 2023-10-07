// cypress - Spec

/// <reference types="Cypress" />

/*
Test pole pro vyplneni e-mailu (jen jeden case, protoze nevim, 
jak se dela spravne dela assertion na to, ze to po submitu nema projit)

Pred samotnym testem vytvorena funkce, ktera osetri chybu formulare, aby to nepadalo, 
a vyplni vsechna ostatni pole tak, aby formular na konci mohl projit.
*/
function visitAndFill() {

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
      
      cy.get('#firstname').type('Yamada')
      cy.get('#lastname').type('Taro')
      cy.get('#countryLabel').type('Japan')
      cy.get('#phone').type('+420121454323')
      
      cy.get('#platform').select('cTrader')
      cy.get('#accountType').select('Standard (STP)')
      cy.get('#leverage').select('1:1')
      cy.get('#currency').select('EUR')
      cy.get('#deposit').type('2000')
      cy.get('#iAgreeDemo').check()
    }


describe('Test currency and deposit', function()      // popis a funkce
{  

    // Test spatneho vyplneni -> nema projit
    it('Test case string', function() {

        visitAndFill()
        cy.get('#email').type('a1@')
        cy.get('.button.purple').click()
        cy.contains('Zadejte hodnotu').should('be.visible')  
        /* nevim, jak tam najit tu chybovou hlasku, ktera se tam objevuje jen na chvili. 
            Prosla jsem snad cely html kod stranky a nevim... */
       
    })  
    
})
  