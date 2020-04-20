import App from 'next/app';
import React, { createContext } from 'react';
import '../styles/style.css';
import Airtable from 'airtable';
const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
  process.env.AIRTABLE_APP
);

export const TranslationContext = createContext([]);
export const PictureContext = createContext([]);

function MyApp({ Component, pageProps, translations, pics }) {
  return (
    <PictureContext.Provider value={pics}>
      <TranslationContext.Provider value={translations}>
        <Component {...pageProps} />
      </TranslationContext.Provider>{' '}
    </PictureContext.Provider>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
MyApp.getInitialProps = async (appContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext);
  const texts = await base('Text').select().all();
  const pics = await base('Images').select().all();

  return {
    ...appProps,
    translations: texts.map((x) => x.fields),
    pics: pics.map((x) => x.fields),
  };
};

export default MyApp;
