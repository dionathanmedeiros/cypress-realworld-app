describe('Create Account in the Real World APP', () => {
    it('teste create account', () => {
      cy.visit('http://localhost:3000/')
      cy.get('[data-test="signup"]').click()
      cy.get('#firstName').type("teste")
      cy.get('#lastName').type("teste123")
      cy.get('#username').type("cleito")
      cy.get('#password').type("teste")
      cy.get('#confirmPassword').type("teste")
      cy.get('[data-test="signup-submit"]').click()
    })
  })