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
You can run unit tests by running:

    npm test

You can run E2E tests by running:

    npm run test:e2e

This will open Cypress in a new window. To run it in CI mode, use:

    npm run test:e2e:ci

Cypress is setup with **visual regression**. If you need to update stored
snapshots, run this command while you have your development instance running:

    npx cypress run --env updateSnapshots=true

Building
========
You can build the website by running:

    gatsby build
