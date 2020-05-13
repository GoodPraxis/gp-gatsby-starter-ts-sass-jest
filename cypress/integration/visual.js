describe('Visual regression tests', () => {
  it('should be publicly accessible', () => {
    cy.visit('/');
    cy.matchImageSnapshot('home');
  });
});
