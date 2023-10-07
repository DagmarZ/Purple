// cypress - Spec

/// <reference types="Cypress" />

describe('Filling correct data and submitting', function()      // popis a funkce
{
    
    it('Test case', function() {
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
          cy.get('#phone').type('121454323')
          cy.get('#countryLabel').type('Japan')
          cy.get('#email').type('a@s.z')
          cy.get('#platform').select('cTrader')
          cy.get('#accountType').select('Standard (STP)')
          cy.get('#leverage').select('1:1')
          cy.get('#currency').select("JPY")
          cy.get('#deposit').type(10000)
          cy.get('#iAgreeDemo').check()
          cy.get('.button.purple').click()

      })

      
  })