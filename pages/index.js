import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';

import { T, Image, Layout } from '../components';
import { useStore } from '../store';
import { HELLOWORLD } from '../constants';
import { add } from '../utils';
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
                <title>bumperballs</title>
                <meta
                  name="viewport"
                  content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
                />
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
  return { props: data };
};

export default IndexPage;
