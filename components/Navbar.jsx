import { useContext, useEffect } from 'react';
import { LanguageContext } from '../pages/_app';
import { view } from 'react-easy-state';
import Link from 'next/link';

import { userLang } from '../pages/_app';

const Navbar = ({ doc, languageCookie }) => {
  const ctx = useContext(LanguageContext);
  let userLang = ctx.state.language;

  return (
    <nav>
      <div>
        <h1>Tec 2000</h1>
      </div>
      <div>
        <menu>
          <ul>
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/[lang]/about" as={`/${userLang}/about`}>
                <a>About</a>
              </Link>
            </li>
            <li>
              <Link href="/[lang]/contact" as={`/${userLang}/contact`}>
                <a>Contact</a>
              </Link>
            </li>
          </ul>
        </menu>
      </div>
      <div>
        {/* <button onClick={() => (userLang.lang = "de-de")}>
          React Easy State Test: De-de
        </button> */}
        <button onClick={() => ctx.updateLang('de-de')}>
          Switch Language DE|GB
        </button>
        {/* <button onClick={() => handleLangChange}>English</button> */}
      </div>
      <style jsx>{`
        nav {
          grid-column: 2 / 3;
          grid-row: 1 / 2;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        ul {
          display: flex;
        }

        li {
          list-style: none;
          margin: 0 1rem;
        }

        a {
          text-decoration: none;
          color: black;
        }
      `}</style>
    </nav>
  );
};

export default view(Navbar);
