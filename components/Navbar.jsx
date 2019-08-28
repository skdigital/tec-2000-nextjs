const Navbar = ({ doc, languageCookie }) => {
  // const [activeLang, setLang] = useLanguageSelector(languageCookie, doc);)

  return (
    <nav>
      <h1>Tec 2000</h1>
      <button onClick={() => setLang('de-de')}>German</button>
      <button onClick={() => setLang('en-gb')}>English</button>
      <style jsx>{`
        nav {
          grid-column: 2 / 3;
          grid-rows: 1 / 2;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
