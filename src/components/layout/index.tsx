/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';

const Layout: React.FC = ({ children } : { children: React.ReactNode }) => (
  <>
    <div>
      <main>{children}</main>
    </div>
  </>
);

export default Layout;
