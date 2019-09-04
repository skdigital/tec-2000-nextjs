import React, { useState, useContext, useEffect } from 'react';
import { LanguageContext } from './_app';
import { RichText, Date } from 'prismic-reactjs';
import { client } from '../prismic-configuration';
import { parseCookies } from '../lib/parseCookies';
import Prismic from 'prismic-javascript';
import fetch from 'isomorphic-unfetch';
import cookies from 'js-cookie';

const Home = ({ doc }) => {
  let ctx = useContext(LanguageContext);
  const [activeLang, setActiveLang] = useState(doc.results[0]);

  useEffect(() => {
    cookies.set('userLang', ctx.state.language);
    async function fetchApi() {
      const res = await fetch(`api/lang/${ctx.state.language}/${'homepage'}/`);
      const doc = await res.json();
      setActiveLang(doc.results[0]);
    }
    fetchApi();
  }, [ctx]);

  return (
    <section className="home-wrapper">
      {/* brand heading text */}
      {RichText.render(activeLang.data.brand_heading)}

      {/* brand heading image */}
      <img
        src={doc.results[0].data.brand_image.url}
        alt={doc.results[0].data.brand_image.alt}
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
  console.log(cookies);
  const languageCookie = cookies.activeLanguage;
  const doc = await client.query(
    Prismic.Predicates.at('document.type', 'homepage')
  );
  return { doc, languageCookie };
};

export default Home;
