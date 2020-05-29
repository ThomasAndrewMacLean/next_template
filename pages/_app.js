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
  const url =
    'https://europe-west1-thomasmaclean.cloudfunctions.net/getDataAirtable';
  const dataFromAirtableJson = await fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ airtableApp: process.env.AIRTABLE_APP }),
  });
  const dataFromAirtable = await dataFromAirtableJson.json();
  const appProps = await App.getInitialProps(appContext);

  //console.log(dataFromAirtable);
  return {
    ...appProps,
    ...dataFromAirtable,
  };
};

export default MyApp;
