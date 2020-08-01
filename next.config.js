require('dotenv').config();
// const withPWA = require('next-pwa');
//const withCSS = require('@zeit/next-css');
const webpack = require('webpack');

const isProduction = process.env.NODE_ENV === 'production';
const prefix = isProduction ? '/' + require('./package.json').name + '/' : '';

const envVariables = {
  AIRTABLE_APP: process.env.AIRTABLE_APP,
  ASSET_PREFIX: prefix,
};

module.exports = {
  env: envVariables,
  publicRuntimeConfig: {
    SENTRY: process.env.SENTRY,
  },
  assetPrefix: prefix,
  exportTrailingSlash: true,
  exportPathMap: function () {
    return {
      '/': { page: '/' },
    };
  },
  webpack: (config) => {
    config.plugins.push(
      new webpack.DefinePlugin({
        'process.env.ASSET_PREFIX': JSON.stringify(prefix),
      })
    );

    return config;
  },
};
