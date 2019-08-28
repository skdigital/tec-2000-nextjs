import { useLanguageSelector } from '../hooks/useLangSelector';
import React from 'react';
import App from 'next/app';
import Layout from '../components/Layout';
import Navbar from '../components/Navbar';

export const LanguageContext = React.createContext();

// function ContextWrapper({ children }) {
//   return (
//     <LanguageContext.Provider value={{}}>{children}</LanguageContext.Provider>
//   );
// }

class MyApp extends App {
  // static async getInitialProps({ Component, ctx }) {
  //   let pageProps = {};
  //   if (Component.getInitialProps) {
  //     pageProps = await Component.getInitialProps(ctx);
  //   }

  //   return { pageProps };
  // }

  state = {
    language: 'en-gb'
  };

  render() {
    const { Component, pageProps } = this.props;
    const { language } = this.state;

    return (
      <LanguageContext.Provider value={language}>
        <Layout>
          <Navbar />
          <Component {...pageProps} />
        </Layout>
      </LanguageContext.Provider>
    );
  }
}

export default MyApp;
