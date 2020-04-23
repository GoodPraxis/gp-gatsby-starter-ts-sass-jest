import React from 'react';

const Layout: React.FC = ({ children } : { children: React.ReactNode }) => (
  <>
    <div>
      <main>{children}</main>
    </div>
  </>
);

export default Layout;
