import Prismic from 'prismic-javascript';

// -- Prismic API endpoint
// Determines which repository to query and fetch data from
// Configure your site's access point here
export const apiEndpoint = 'https://tec-2000-nextjs.cdn.prismic.io/api/v2';

// -- Access Token if the repository is not public
// Generate a token in your dashboard and configure it here if your repository is private
export const accessToken =
  'MC5YV1E5R2hBQUFDUUE4WmF5.77-9Dwh177-977-9ThTvv705P--_vTRLNi4oNUZ0W--_ve-_ve-_ve-_vWnvv71s77-9Nu-_ve-_vQ';

// -- Link resolution rules
// Manages links to internal Prismic documents
// Modify as your project grows to handle any new routes you've made
export const linkResolver = doc => {
  if (doc.type === 'post') {
    return `/post/${post.uid}`;
  }
  return '/';
};

// Additional helper function for Next/Link components
export const hrefResolver = doc => {
  if (doc.type === 'post') {
    return `/post/?uid=${post.uid}`;
  }
  return '/';
};

// -- Client method to query Prismic
// Connects to the given repository to facilitate data queries
export const client = Prismic.client(apiEndpoint, { accessToken });
