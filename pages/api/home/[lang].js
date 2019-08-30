import { parseCookies } from '../../../lib/parseCookies';
import { client } from '../../../prismic-configuration';
import Prismic from 'prismic-javascript';

export default async (req, res) => {
  const doc = await client.query(
    Prismic.Predicates.at('document.type', 'homepage'),
    {
      lang: `${req.query.lang}`
    }
  );

  res.status(200).json(doc);
};
