import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Layout, SEO } from '../components';

import {
  TranslationContext,
  PictureContext,
  SEOContext,
} from '../utils/contexts';
import { getDataFromAirtable } from '../utils';

const ContactPage = ({ translations, pics, seo }) => {
  return (
    <PictureContext.Provider value={pics}>
      <SEOContext.Provider value={seo}>
        <TranslationContext.Provider value={translations}>
          <Layout page="contact">
            <Main>
              <SEO seo={seo}></SEO>
              <h1>Contact</h1>
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

ContactPage.propTypes = {
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

export default ContactPage;
