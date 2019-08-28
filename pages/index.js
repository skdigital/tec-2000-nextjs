import React, { useState, useEffect } from 'react';
import { RichText, Date } from 'prismic-reactjs';
import { client } from '../prismic-configuration';
import { parseCookies } from '../lib/parseCookies';
import { useFilteredLang } from '../hooks/useFilteredLang';
import Cookie from 'js-cookie';
import Layout from '../components/Layout';
import Prismic from 'prismic-javascript';

const Home = ({ doc, initLangCookie }) => {
  const [lang, setLang] = useState(initLangCookie || 'en-gb');
  const [currentLang, setCurrentLang] = useState(useFilteredLang(lang, doc));

  useEffect(() => {
    Cookie.set('currentLang', lang);
    const newLangSelect = useFilteredLang(lang, doc);
    setCurrentLang(newLangSelect);
  }, [lang]);

  return (
    <Layout>
      <section className="home-wrapper">
        {/* buttons to switch Language */}
        <button onClick={() => setLang('de-de')}>German</button>
        <button onClick={() => setLang('en-gb')}>English</button>

        {/* brand heading text */}
        {RichText.render(currentLang.data.brand_heading)}

        {/* brand heading image */}
        <img
          src={currentLang.data.brand_image.url}
          alt={currentLang.data.brand_image.alt}
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
    </Layout>
  );
};

Home.getInitialProps = async ({ context, req }) => {
  const cookies = parseCookies(req);
  const initLangCookie = cookies.currentLang;
  const doc = await client.query(
    Prismic.Predicates.at('document.type', 'homepage'),
    {
      lang: '*'
    }
  );
  return { doc, initLangCookie };
};

export default Home;
