import React, { useState, useEffect } from 'react';
import { RichText, Date } from 'prismic-reactjs';
import { client } from '../prismic-configuration';
import Layout from '../components/Layout';
import Prismic from 'prismic-javascript';
import Link from 'next/link';

// custom hooks
import { useFilteredLang } from '../hooks/useFilteredLang';

const Home = ({ doc }) => {
  // initial language state selection
  const [lang, setLang] = useState('en-gb');
  // initial language propagation (props) seed data for component
  const [currentLang, setCurrentLang] = useState(useFilteredLang(lang, doc));

  useEffect(() => {
    // If languageState changes run language filter and set new language choice
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

Home.getInitialProps = async context => {
  const doc = await client.query(
    Prismic.Predicates.at('document.type', 'homepage'),
    {
      lang: '*'
    }
  );
  return { doc };
};

export default Home;
