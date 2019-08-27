import React from 'react';

function Footer() {
  return (
    <footer>
      <p>&copy; Tec 2000 Ltd. All Rights Reserved.</p>

      <style jsx>
        {`
          footer {
            grid-column: 2 / 3;
            grid-row: 3 / 4;
          }
        `}
      </style>
    </footer>
  );
}

export default Footer;
