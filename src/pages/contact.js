import React from 'react';
import styled from 'styled-components';

import { Layout } from '../components';

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
  return { props: data };
};

export default ContactPage;
