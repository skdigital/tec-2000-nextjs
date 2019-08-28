import fetch from 'isomorphic-unfetch';

export default async (req, res) => {
  let r = await fetch('https://jsonplaceholder.typicode.com/posts');
  let data = await r.json();
  res.json(data);
};
