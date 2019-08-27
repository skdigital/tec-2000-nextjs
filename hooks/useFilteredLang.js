export const useFilteredLang = (lang, doc) => {
  const currentLang = doc.results.find(el => {
    return el.lang === lang;
  });

  return currentLang;
};
