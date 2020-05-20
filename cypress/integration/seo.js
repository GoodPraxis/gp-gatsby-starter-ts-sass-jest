import CONFIG from '../../gatsby-config.js';

describe('SEO tests', () => {
  const { siteMetadata } = CONFIG;
  beforeEach(() => {
    cy.visit('/');
  });

  it('should have description', () => {
    cy.get('meta[name="description"]')
      .should('have.attr', 'content', siteMetadata.description);
  });

  it('should have OG tags', () => {
    cy.get('meta[property="og:title"]')
      .should('have.attr', 'content', siteMetadata.title);

    cy.get('meta[property="og:image"]')
      .should('have.attr', 'content', siteMetadata.image);
  });
});
