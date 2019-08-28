import React, { useContext, useEffect } from 'react';
import { RichText, Date } from 'prismic-reactjs';
import { client } from '../prismic-configuration';
import { parseCookies } from '../lib/parseCookies';
import { useLanguageSelector } from '../hooks/useLangSelector';
import Prismic from 'prismic-javascript';
import { LanguageContext } from './_app';

import fetch from 'isomorphic-unfetch';

const Home = ({ doc, languageCookie }) => {
  const selectedLanguage = useContext(LanguageContext);
  const [activeLang] = useLanguageSelector(doc, languageCookie);

  useEffect(() => {
    async function fetchApi() {
      const res = await fetch('http://localhost:3000/api/home/[lang]');
      const data = await res.json();
      console.log(data);
    }
    fetchApi();
  });

  return (
    <section className="home-wrapper">
      {/* brand heading text */}
      {RichText.render(activeLang.data.brand_heading)}

      {/* brand heading image */}
      <img
        src={activeLang.data.brand_image.url}
        alt={activeLang.data.brand_image.alt}
      />

      <style jsx>{`
        section {
          grid-column: 2 / 3;
          grid-row: 3 / 4;
        }

        img {
          max-width: 100%;
        }
      `}</style>
    </section>
  );
};

Home.getInitialProps = async ({ context, req }) => {
  const cookies = parseCookies(req);
  const languageCookie = cookies.activeLanguage;
  const doc = await client.query(
    Prismic.Predicates.at('document.type', 'homepage'),
    {
      lang: '*'
    }
  );
  return { doc, languageCookie };
};

export default Home;
