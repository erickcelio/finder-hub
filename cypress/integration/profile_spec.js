describe('Profile Page', () => {
  beforeEach(() => {
    cy.enterUser('erickcelio')
  })

  it.only('check if click on back arrow redirect to home page', () => {
    cy.get('#arrow-back').should('exist')
    cy.get('#arrow-back').click()
    cy.location('pathname').should('eq', '/')
  })

  it('check if has list of repositories', () => {
    cy.get('#repositories').should('exist')
  })

  it('check if has user profile', () => {
    cy.get('#user-profile').should('exist')
  })

  it('check if user profile has avatar', () => {
    cy.get('#user-avatar').should('exist')
  })

  it('check if user profile has bio', () => {
    cy.get('#user-bio').should('exist')
  })

  it('check if user profile has email', () => {
    cy.get('#user-email').should('exist')
  })

  it('check if user profile has followers', () => {
    cy.get('#user-followers').should('exist')
  })

  it('check if user profile has following', () => {
    cy.get('#user-following').should('exist')
  })

  it('check if has a repository', () => {
    cy.get('#repository').should('exist')
  })

  it('check if repository has description', () => {
    cy.get('#repository #repository-description').should('exist')
  })

  it('check if repository has watchers', () => {
    cy.get('#repository #repository-watchers').should('exist')
  })

  it('check if repository has forks', () => {
    cy.get('#repository #repository-forks').should('exist')
  })

  it('check if repository has stars', () => {
    cy.get('#repository #repository-stars').should('exist')
  })

  it('check if repository has link', () => {
    cy.get('#repository #repository-link').should('exist')
  })
})
