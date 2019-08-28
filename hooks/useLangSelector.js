import { useState, useEffect } from 'react';
import Cookie from 'js-cookie';

function useLanguageSelector(doc, languageCookie) {
  const [lang, setLang] = useState(languageCookie || 'en-gb');
  const [activeLang, setActiveLang] = useState(useFilteredLang(lang, doc));

  useEffect(() => {
    Cookie.set('activeLanguage', lang);
    const updateLanguage = useFilteredLang(lang, doc);
    setActiveLang(updateLanguage);
  }, [lang]);

  return [activeLang, setLang];
}

// filter language from doc algo
const useFilteredLang = (lang, doc) => {
  const activeLang = doc.results.find(el => {
    return el.lang === lang;
  });

  return activeLang;
};

export { useLanguageSelector };
