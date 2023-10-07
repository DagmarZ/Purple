// cypress - Spec

/// <reference types="Cypress" />

/*
Test pole pro vyplneni telefonniho cisla

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
      cy.get('#email').type('a@s.z')
      cy.get('#platform').select('cTrader')
      cy.get('#accountType').select('Standard (STP)')
      cy.get('#leverage').select('1:1')
      cy.get('#currency').select('EUR')
      cy.get('#deposit').type('2000')
      cy.get('#iAgreeDemo').check()
    }


describe('Test currency and deposit', function()      // popis a funkce
{  
    // Test spravneho vyplneni -> ma projit
    it('Test case correct', function() {

        visitAndFill()
        cy.get('#phone').type('+420121454323')
        cy.get('.button.purple').click()
        
    })  

    // Test spatneho vyplneni - pismena -> nema projit, ale opet nevim, jakym assertionem to overit
    it('Test case string', function() {

        visitAndFill()
        cy.get('#phone').type('asdadadasdasd')
        cy.get('.button.purple').click()
    })  
    
    // Test spatneho vyplneni - nesmyslne znaky -> nema projit, ale opet nevim, jakym assertionem to overit
    it('Test case wrong', function() {

        visitAndFill()
        cy.get('#phone').type('a?!/"/).][]@')
        cy.get('.button.purple').click()
        
    })  

    // Test na to, ze max. delka znaku v poli ma byt 13
    it('Test case wrong', function() {

        cy.get('#phone').should('have.attr', 'maxlength', 13)
        
    })  


})
  