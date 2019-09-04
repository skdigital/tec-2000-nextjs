import { view, store } from 'react-easy-state';
import React from 'react';
import App from 'next/app';
import Layout from '../components/Layout';
import Cookies from 'js-cookie';

export const userLang = store({ lang: 'en-gb' });
export const LanguageContext = React.createContext();

class MyApp extends App {
  state = {
    language: 'en-gb'
  };

  updateLang = lang => {
    this.setState({
      language: lang === this.state.language ? 'en-gb' : 'de-de'
    });
  };

  componentDidMount() {
    Cookies.set('storedLang', this.state.language);
  }

  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <LanguageContext.Provider
        value={{ state: this.state, updateLang: this.updateLang }}
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </LanguageContext.Provider>
    );
  }
}

export default view(MyApp);
