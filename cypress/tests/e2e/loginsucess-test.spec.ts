describe('template spec', () => {
    it('test login sucess', () => {
      cy.visit('http://localhost:3000/')
      cy.get('#username').type("cleito")
      cy.get('#password').type("teste")
      cy.get('.PrivateSwitchBase-input').click()
      cy.get('[data-test="signin-submit"]').click()
    })
  })