const fs = require('fs');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const pageTemplate = `import React from 'react';
import styled from 'styled-components';
import { TranslationsType, ImagesType, SEOType } from '../types';

import { Layout, SEO } from '../components';

import {
  TranslationContext,
  PictureContext,
  SEOContext,
} from '../utils/contexts';
import { getDataFromAirtable } from '../utils';

const XXXXXPage = ({ translations, pics, seo }: XXXXXPageProps) => {
  return (
    <PictureContext.Provider value={pics}>
      <SEOContext.Provider value={seo}>
        <TranslationContext.Provider value={translations}>
          <Layout page="xxxxx">
            <Main>
              <SEO seo={seo}></SEO>
              <h1>XXXXX</h1>
            </Main>
          </Layout>
        </TranslationContext.Provider>
      </SEOContext.Provider>
    </PictureContext.Provider>
  );
};

const Main = styled.main\`
  background: var(--background-dark);
\`;

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
type XXXXXPageProps = {
  translations: TranslationsType[];
  pics: ImagesType[];
  seo: SEOType[];
};
export default XXXXXPage;

`;

const capitalize = (s) => {
  if (typeof s !== 'string') return '';
  return s.charAt(0).toUpperCase() + s.slice(1);
};

rl.question('What will be the new page? ', function (componentName) {
  rl.question('Should we show it in the nav? [y/n] ', function (showInNav) {
    componentName = componentName.toLowerCase();
    console.log(componentName);
    const page = pageTemplate
      .split('xxxxx')
      .join(componentName)
      .split('XXXXX')
      .join(capitalize(componentName));
    fs.writeFileSync(`src/pages/${componentName}.tsx`, page);

    let indexPage = fs.readFileSync('src/constants/pages.ts', 'utf8');
    indexPage = indexPage.replace('];', '');

    const newPage= `{ id: '${componentName}', url: '${componentName}', showInNav: ${showInNav.toLowerCase() !== 'n'} },\n];`
    fs.writeFileSync('src/constants/pages.ts', indexPage + newPage);
    rl.close();
  });
});
