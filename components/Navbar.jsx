import { useContext } from 'react';
import { LanguageContext } from '../pages/_app';
import { view } from 'react-easy-state';

import { userLang } from '../pages/_app';

const Navbar = ({ doc, languageCookie }) => {
  const ctx = useContext(LanguageContext);
  return (
    <nav>
      <h1>Tec 2000</h1>
      <button onClick={() => (userLang.lang = 'de-de')}>
        React Easy State Test: De-de
      </button>
      <button onClick={() => ctx.updateLang('de-de')}>German</button>
      {/* <button onClick={() => handleLangChange}>English</button> */}
      <style jsx>{`
        nav {
          grid-column: 2 / 3;
          grid-rows: 1 / 2;
        }
      `}</style>
    </nav>
  );
};

export default view(Navbar);
