import React from 'react';

import Footer from '../components/Footer';

function Layout({ children }) {
  return (
    <div className="layout-container">
      <main>{children}</main>
      <Footer />
      <style jsx global>{`
        body {
          background: #fafafa;
        }
        .layout-container {
          max-width: 1166px;
          margin: 0 auto;
          border: 1px dotted lightgrey;
          display: grid;
          grid-template-columns:
            minmax(50px, 1fr)
            minmax(250px, 10fr)
            minmax(50px, 1fr);
          grid-template-rows: 50px min-content 100px;
        }

        main {
          grid-column: 2 / 3;
          grid-row: 2 / 3;
        }
      `}</style>
    </div>
  );
}

export default Layout;
