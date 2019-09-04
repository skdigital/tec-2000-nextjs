const express = require('express');
const next = require('next');

const port = process.env.PORT || 3000;
const app = next({ dev: process.env.NODE_ENV !== 'production' });
const handle = app.getRequestHandler();

const robotsOptions = {
  root: __dirname + '/static/',
  headers: {
    'Content-Type': 'text/plain;charset=UTF-8'
  }
};

(async () => {
  await app.prepare();
  const server = express();

  server.get('/robots.txt', (req, res) => {
    return res.status(200).sendFile('robots.txt', robotsOptions);
  });

  await server.listen(port);
  console.log(`> Ready on http://localhost:${port}`); // eslint-disable-line no-console
})();

// const sitemapOptions = {
//   root: __dirname + '/static/',
//   headers: {
//     'Content-Type': 'text/xml;charset=UTF-8'
//   }
// };
// server.get('/sitemap.xml', (req, res) =>
//   res.status(200).sendFile('sitemap.xml', sitemapOptions)
// );

// const faviconOptions = {
//   root: __dirname + '/static/'
// };
// server.get('/favicon.ico', (req, res) =>
//   res.status(200).sendFile('favicon.ico', faviconOptions)
// );
