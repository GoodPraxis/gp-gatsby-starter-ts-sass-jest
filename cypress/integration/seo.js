import CONFIG from '../../gatsby-config.js';

describe('SEO tests', () => {
  const { siteMetadata: { description, title, image } } = CONFIG;
  beforeEach(() => {
    cy.visit('/');
  });

  it('should have correct title', () => {
    cy.get('html>head>title').contains('Home');
  });

  it('should have description', () => {
    cy.get('meta[name="description"]')
      .should('have.attr', 'content', description);
  });

  it('should have OG tags', () => {
    cy.get('meta[property="og:title"]')
      .should('have.attr', 'content', title);

    cy.get('meta[property="og:image"]')
      .should('have.attr', 'content', image);
  });
});
