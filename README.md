<p align="center">
  <a href="https://www.gatsbyjs.org">
    <img alt="Gatsby" src="https://www.gatsbyjs.org/monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Gatsby's Starter: TypeScript + SASS + Jest + SEO + Cypress
</h1>

Gatsby starter used at [Good Praxis](https://goodpraxis.coop). Setup to use
TypeScript, SASS (SCSS), Jest and Cypress for testing, and Helmet for SEO.

The Cypress E2E setup contains accessibility and visual regression tests.

Setup
=====
Make sure you have `gatsby-cli` installed:

    npm install -g gatsby-cli

Next, create a new site using this starter:

    gatsby new our-site https://github.com/GoodPraxis/gp-gatsby-starter-ts-sass-jest
    cd our-site

Development
===========
You can run a development instance by running:

    gatsby develop

Remember to **update your snapshots** when you change things (see below).

Testing
=======
To run all tests, use:

    npm test

You can run unit tests by running:

    npm run test:unit

You can run E2E tests by running:

    npm run test:e2e

This will open Cypress in a new window. To run it in CI mode, use:

    npm run test:e2e:ci

Snapshots
---------

Jest unit tests will often compare rendered markup with snapshots.
If you need to update them after making changes to the markup, run:

    npm test -- -u

Cypress is setup with **visual regression**. If you need to update stored
snapshots, run this command while you have your development instance running:

    npx cypress run --env updateSnapshots=true

You can run both commands by executing:

    npm run test:snapshots

Building
========
You can build the website by running:

    gatsby build
