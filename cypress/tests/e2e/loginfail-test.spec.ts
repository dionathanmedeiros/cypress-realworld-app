describe('test login failure', () => {
    it('test login fail', () => {
      cy.visit('http://localhost:3000/')
      cy.get('#username').type("cleito123")
      cy.get('#password').type("teste123")
      cy.get('.PrivateSwitchBase-input').click()
      cy.get('[data-test="signin-submit"]').click()
      cy.get('.MuiAlert-message').contains("Username or password is invalid")
    })
  })
