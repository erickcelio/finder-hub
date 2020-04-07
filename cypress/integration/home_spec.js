describe('Home Page', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('check if has user form', () => {
    cy.getByTestId('user-form').should('exist')
  })

  it('check if has username input', () => {
    cy.get('[name=username]').should('exist')
  })

  it('check if has submit button', () => {
    cy.contains('Localizar').should('exist')
  })

  it('check if error message is not visible on start', () => {
    cy.contains('Por favor preencha este campo!').should('not.exist')
  })

  it('check if error message is visible after submit form with empty input', () => {
    cy.contains('Localizar').click()
    cy.contains('Por favor preencha este campo!').should('exist')
  })

  it('check if error message is not visible after type something on input', () => {
    cy.contains('Localizar').click()
    cy.get('[name=username]').type('erickcelio')
    cy.contains('Por favor preencha este campo!').should('not.exist')
  })

  it('check if on type some invalid user and submit show error message', () => {
    cy.get('[name=username]').type('erickcelio1')
    cy.contains('Localizar').click()
    cy.contains('Usuário não encontrado!').should('exist')
  })

  it('check if on type valid user and submit go to next page', () => {
    cy.get('[name=username]').type('erickcelio')
    cy.contains('Localizar').click()
    cy.location('pathname').should('eq', '/profile')
  })
})
