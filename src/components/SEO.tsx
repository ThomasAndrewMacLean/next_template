import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';

import { getSEO } from '../utils';
import { SEOType } from '../types';

const SEO = ({ seo }: { seo: SEOType[] }) => {
  return (
    <Head>
      <title>{getSEO(seo, 'title')}</title>
      <link rel="shortcut icon" href={getSEO(seo, 'favicon')} />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
      />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:url" content={getSEO(seo, 'url')} />
      <meta name="twitter:title" content={getSEO(seo, 'title')} />
      <meta name="twitter:description" content={getSEO(seo, 'description')} />
      <meta name="twitter:image" content={getSEO(seo, 'twitterCard')} />

      <meta name="twitter:creator" content={getSEO(seo, 'twitterName')} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={getSEO(seo, 'title')} />
      <meta property="og:description" content={getSEO(seo, 'description')} />
      <meta property="og:site_name" content={getSEO(seo, 'title')} />
      <meta property="og:url" content={getSEO(seo, 'url')} />
      <meta property="og:image" content={getSEO(seo, 'twitterCard')} />
      <meta name="application-name" content={getSEO(seo, 'title')} />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content={getSEO(seo, 'title')} />
      <meta name="description" content={getSEO(seo, 'description')} />
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />

      <meta name="theme-color" content={getSEO(seo, 'themeColor')} />
    </Head>
  );
};

SEO.propTypes = {
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
export default SEO;
