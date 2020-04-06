describe('App', () => {
  it('check if app is rendering start message', () => {
    cy.visit('http://localhost:3000')
    cy.contains('Localize Hub')
  })
})
