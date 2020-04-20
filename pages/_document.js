import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
// Import styled components ServerStyleSheet
import { ServerStyleSheet } from 'styled-components';
import { prefix } from '../utils';

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    // Step 1: Create an instance of ServerStyleSheet
    const sheet = new ServerStyleSheet();

    // Step 2: Retrieve styles from components in the page
    const page = renderPage((App) => (props) =>
      sheet.collectStyles(<App {...props} />)
    );

    // Step 3: Extract the styles as <style> tags
    const styleTags = sheet.getStyleElement();

    // Step 4: Pass styleTags as a prop
    return { ...page, styleTags };
  }

  render() {
    return (
      <html lang="en">
        <Head>
          <link rel="manifest" href={`${prefix}/manifest.json`} />

          <meta name="application-name" content="Westerling &amp; MacLean" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta
            name="apple-mobile-web-app-title"
            content="Westerling &amp; MacLean"
          />
          <meta name="description" content="Westerling &amp; MacLean" />
          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />
          {/* <meta
  name="msapplication-config"
  content="/browserconfig.xml"
/> */}
          <meta name="msapplication-TileColor" content="#2B5797" />
          <meta name="msapplication-tap-highlight" content="no" />
          {/* <meta name="theme-color" content="#000000" /> */}
          {/* <meta
  name="viewport"
  content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
/> */}

          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href={`${prefix}/apple-touch-icon.png`}
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href={`${prefix}/favicon-32x32.png`}
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href={`${prefix}/favicon-16x16.png`}
          />
          {/* <link
  rel="mask-icon"
  href="/safari-pinned-tab.svg"
  color="#5bbad5"
/> */}
          <link rel="shortcut icon" href={`${prefix}/favicon.ico`} />
          {/* <link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
/> */}

          <meta name="twitter:card" content="summary" />
          <meta name="twitter:url" content="https://bumperballs.be" />
          <meta name="twitter:title" content="Westerling &amp; MacLean" />
          <meta name="twitter:description" content="Westerling &amp; MacLean" />
          <meta
            name="twitter:image"
            content="https://bumperballs.be/android-chrome-192x192.png"
          />
          {/*
<meta name="twitter:creator" content="@DavidWShadow" /> */}
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Westerling &amp; MacLean" />
          <meta property="og:description" content="Westerling &amp; MacLean" />
          <meta property="og:site_name" content="Westerling &amp; MacLean" />
          <meta property="og:url" content="https://bumperballs.be" />
          <meta
            property="og:image"
            content="https://bumperballs.be/apple-touch-icon.png"
          />
          {/* Step 5: Output the styles in the head  */}
          {this.props.styleTags}

          <script
            dangerouslySetInnerHTML={{
              __html: `  window.addEventListener('beforeinstallprompt', function(e) {
                e.preventDefault()
                return false;
            });`,
            }}
          ></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
