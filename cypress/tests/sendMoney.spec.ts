describe('template spec', () => {
    it('test login sucess', () => {
      cy.visit('http://localhost:3000/')
      cy.get('#username').type("cleito")
      cy.get('#password').type("teste")
      cy.get('.PrivateSwitchBase-input').click()
      cy.get('[data-test="signin-submit"]').click()

      //Send Money
      cy.get("[href='/transaction/new']").click()
      cy.get('[data-test="user-list-item-_XblMqbuoP"]').click()
      cy.get('#amount').type("50")
      cy.get('#transaction-create-description-input').type("test")
      cy.get('[data-test="transaction-create-submit-payment"]').click()
      cy.get('.MuiGrid-grid-xs-12').contains("Paid $50.00 for test")

    })
    })