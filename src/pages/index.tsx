import React from 'react';
import { Layout, SEO } from '../components';
import {
  TranslationContext,
  PictureContext,
  SEOContext,
  FaqContext,
} from '../utils/contexts';
import { getDataFromAirtable } from '../utils';
import {
  TranslationsType,
  ImagesType,
  SEOType,
  FaqsType,
  DataAirtablePromiseType,
} from '../types';
import { homePageSections, pageNames } from '../constants';
import { componentMap } from '../constants/components';

const IndexPage = ({ translations, pics, seo, faqs }: IndexPageProps) => {
  const page = pageNames.home;
  return (
    <PictureContext.Provider value={pics}>
      <SEOContext.Provider value={seo}>
        <FaqContext.Provider value={faqs}>
          <TranslationContext.Provider value={translations}>
            <Layout page={page}>
              <main>
                <SEO seo={seo}></SEO>
                {homePageSections.map((comp, index) => {
                  const component = componentMap[comp];
                  if (component) {
                    return (
                      <component.type page={page} key={index}></component.type>
                    );
                  }
                })}
              </main>
            </Layout>
          </TranslationContext.Provider>
        </FaqContext.Provider>
      </SEOContext.Provider>
    </PictureContext.Provider>
  );
};

export const getStaticProps = async (): DataAirtablePromiseType => {
  const data = await getDataFromAirtable();
  return {
    props: {
      translations: data.translations.filter((x) => x.id),
      pics: data.pics.filter((x) => x.id),
      seo: data.seo.filter((x) => x.id),
      faqs: data.Faqs.filter((x) => x.Vraag),
    },
  };
};

type IndexPageProps = {
  translations: TranslationsType[];
  pics: ImagesType[];
  seo: SEOType[];
  faqs: FaqsType[];
};

export default IndexPage;
