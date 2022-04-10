describe('Navigation', () => {
  it('should navigate to the success page', () => {
    // Start from the index page
    cy.visit('http://localhost:3000/')

    cy.get('input[name="website"]').type('example.com')
    cy.get('input[name="email"]').type('user@example.com')
    cy.get('input[name="name"]').type('John Doe')
    cy.get('input[name="about"]').type('linkedin', { force: true })
    cy.get('input[type="checkbox"]').check()

    cy.get('button').should('be.visible').click()

    cy.url().should('include', '/success')
    cy.get('h1').contains('Thank you...')
  })

  it('should not navigate to the success page', () => {
    cy.visit('http://localhost:3000/')

    cy.get('input[type="checkbox"]').check()

    cy.get('button').should('be.visible').click()

    cy.location('pathname').should('match', /\//);
  })

  it('should require checkbox to be checked', () => {
    cy.visit('http://localhost:3000/')

    cy.get('button').should('be.disabled');
  })

  it('should not allow gmail', () => {
    cy.visit('http://localhost:3000/')

    cy.get('input[name="website"]').type('example.com')
    cy.get('input[name="email"]').type('user@gmail.com')
    cy.get('input[name="name"]').type('John Doe')
    cy.get('input[name="about"]').type('linkedin', { force: true })
    cy.get('input[type="checkbox"]').check()

    cy.get('button').should('be.visible').click()

    cy.get('[aria-label="Work Email"] > p')
      .should('be.visible')
      .contains('please enter your business email address. this form does not accept addresses from gmail')
  })
})