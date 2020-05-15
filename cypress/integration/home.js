describe('Homepage tests', () => {
  it('should have required elements', () => {
    cy.visit('/');
    cy.get('h1').contains('Home');
    cy.get('title').contains('Home');
  });

  it('should have OG tags', () => {
    cy.get('meta[property="og:title"]')
      .should('have.attr', 'content', 'Website');
  });
});
