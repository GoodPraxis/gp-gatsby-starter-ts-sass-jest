import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

import './main.scss';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Home</h1>
    <p>Hello world</p>
  </Layout>
);

export default IndexPage;
