describe('template spec', () => {
    it('test login sucess', () => {
      cy.visit('http://localhost:3000/')
      cy.get('#username').type("cleito")
      cy.get('#password').type("teste")
      cy.get('.PrivateSwitchBase-input').click()
      cy.get('[data-test="signin-submit"]').click()

      // Create Account Bank
      cy.get('[data-test="sidenav-bankaccounts"] > .MuiListItemText-root > .MuiTypography-root').click()
      cy.get("[data-test='bankaccount-new']").click()
      cy.get("[name='bankName']").type("cleito")
      cy.get("[name='routingNumber']").type("123456789")
      cy.get("[name='accountNumber']").type("987654321")
      cy.get('[data-test="bankaccount-submit"]').click()
    })
  })

