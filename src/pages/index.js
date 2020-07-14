import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { T, Image, Layout } from '../components';
import { useStore } from '../store';
import { HELLOWORLD } from '../constants';
import { add, getSEO } from '../utils';
import {
  TranslationContext,
  PictureContext,
  SEOContext,
} from '../utils/contexts';
import { getDataFromAirtable } from '../utils';

const IndexPage = ({ translations, pics, seo }) => {
  const { count, countPlusOne } = useStore();
  return (
    <PictureContext.Provider value={pics}>
      <SEOContext.Provider value={seo}>
        <TranslationContext.Provider value={translations}>
          <Layout page="home">
            <Main>
              <Head>
                <title>{getSEO(seo, 'title')}</title>
                <link rel="shortcut icon" href={getSEO(seo, 'favicon')} />
                <meta
                  name="viewport"
                  content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
                />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:url" content="https://bumperballs.be" />
                <meta name="twitter:title" content="bumperballs" />
                <meta name="twitter:description" content="bumperballs" />
                <meta
                  name="twitter:image"
                  content="https://bumperballs.be/android-chrome-192x192.png"
                />
                {/*
<meta name="twitter:creator" content="@DavidWShadow" /> */}
                <meta property="og:type" content="website" />
                <meta property="og:title" content="bumperballs" />
                <meta property="og:description" content="bumperballs" />
                <meta property="og:site_name" content="bumperballs" />
                <meta property="og:url" content="https://bumperballs.be" />
                <meta
                  property="og:image"
                  content="https://bumperballs.be/apple-touch-icon.png"
                />
                <meta name="application-name" content="bumperballs" />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta
                  name="apple-mobile-web-app-status-bar-style"
                  content="default"
                />
                <meta name="apple-mobile-web-app-title" content="bumperballs" />
                <meta name="description" content="bumperballs" />
                <meta name="format-detection" content="telephone=no" />
                <meta name="mobile-web-app-capable" content="yes" />
                {/* <meta
  name="msapplication-config"
  content="/browserconfig.xml"
/> */}
                <meta name="msapplication-TileColor" content="#2B5797" />
                <meta name="msapplication-tap-highlight" content="no" />
                <meta name="theme-color" content="#000000" />
              </Head>
              <h1>{HELLOWORLD}</h1>
              <T translationKey="test"></T>
              <T translationKey="test2"></T>
              <button onClick={countPlusOne}>+</button>
              <Image imageKey="hero-image"></Image>
              {count}+ 1 = {add(count, 1)}
            </Main>
          </Layout>
        </TranslationContext.Provider>
      </SEOContext.Provider>
    </PictureContext.Provider>
  );
};

const Main = styled.main`
  background: var(--background-dark);
`;

export const getStaticProps = async () => {
  const data = await getDataFromAirtable();
  return {
    props: {
      translations: data.translations.filter((x) => x.id),
      pics: data.pics.filter((x) => x.id),
      seo: data.seo.filter((x) => x.id),
    },
  };
};

IndexPage.propTypes = {
  translations: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      NL: PropTypes.string,
      'NL zonder opmaak': PropTypes.string,
    })
  ).isRequired,
  pics: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      pic: PropTypes.arrayOf(
        PropTypes.shape({
          url: PropTypes.string.isRequired,
          thumbnails: PropTypes.shape({
            large: PropTypes.shape({
              url: PropTypes.string.isRequired,
            }),
            small: PropTypes.shape({
              url: PropTypes.string.isRequired,
            }),
          }),
        })
      ),
    })
  ).isRequired,
  seo: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string,
      pic: PropTypes.arrayOf(
        PropTypes.shape({
          url: PropTypes.string.isRequired,
          thumbnails: PropTypes.shape({
            large: PropTypes.shape({
              url: PropTypes.string.isRequired,
            }),
            small: PropTypes.shape({
              url: PropTypes.string.isRequired,
            }),
          }),
        })
      ),
    })
  ).isRequired,
};

export default IndexPage;
