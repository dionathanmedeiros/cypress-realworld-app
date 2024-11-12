describe('template spec', () => {
    it('test login sucess', () => {
      cy.visit('http://localhost:3000/')
      cy.get('#username').type("cleito")
      cy.get('#password').type("teste")
      cy.get('.PrivateSwitchBase-input').click()
      cy.get('[data-test="signin-submit"]').click()

    //  Historic Transction
      cy.get('[data-test="nav-personal-tab"]').click()
      cy.get('[data-test="transaction-item-IAAVMsGYm"]').click()
      cy.get('[data-test="main"]').contains("teste teste123 requested Ted Parisian")
    })
})