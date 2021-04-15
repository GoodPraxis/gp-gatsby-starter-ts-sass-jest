describe('Homepage tests', () => {
  beforeEach(() => {
    cy.visit('/').get('main').injectAxe();
  });

  it('has no detectable accessibility violations on load', () => {
    cy.checkA11y();
  });

  it('should have required elements', () => {
    cy.get('h1').contains('Home');
    cy.get('title').contains('Home');
  });
});
