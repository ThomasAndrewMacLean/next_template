import { SEOType, TranslationsType, ImagesType, FaqsType } from '../types';
import marked from 'marked';

export const add = (a: number, b: number): number => {
  return a + b;
};

const isProduction = process.env.NODE_ENV === 'production';
export const prefix = isProduction ? process.env.ASSET_PREFIX : '';

export const convertToHtml = (input: string): string => {
  return marked(input);
};

export const getImageUrl = (
  context: ImagesType[],
  id: string,
  full: boolean
): string => {
  const foundPic = context.find((p: any) => p.id == id);

  if (!foundPic) {
    console.error('Picture not found!', id);
    return '';
  }
  return full ? foundPic?.pic[0].url! : foundPic?.pic[0].thumbnails.large.url!;
};

export const getImageUrlPreview = (
  context: ImagesType[],
  id: string
): string => {
  const foundPic = context.find((p: any) => p.id == id);
  if (!foundPic) {
    console.error('Picture not found!', id);
    return '';
  }
  return foundPic?.pic[0].thumbnails.small.url!;
};

export const getImageHeightWidth = (context: ImagesType[], id: string) => {
  const foundPic = context.find((p: any) => p.id == id);
  if (!foundPic) {
    console.error('Picture not found!', id);
  }
  return {
    height: foundPic?.pic[0].thumbnails.small.height,
    width: foundPic?.pic[0].thumbnails.small.width,
  };
};

export const getSEO = (context: SEOType[], id: string) => {
  const foundSEO = context.find((p) => p.id == id);

  if (!foundSEO) {
    console.error('SEO not found!', id);
    return '';
  }

  if (!foundSEO.text && !foundSEO.pic) {
    console.error('SEO not found!', id);
    return '';
  }
  return foundSEO.text ? foundSEO.text : foundSEO.pic[0].url;
};

export const getDataFromAirtable = async (): Promise<{
  seo: SEOType[];
  translations: TranslationsType[];
  pics: ImagesType[];
  Faqs: FaqsType[];
}> => {
  const url =
    'https://europe-west1-thomasmaclean.cloudfunctions.net/getDataAirtable';
  const dataFromAirtableJson = await fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      airtableApp: process.env.AIRTABLE_APP,
      extraCols: ['Faqs'],
    }),
  });
  const dataFromAirtable = await dataFromAirtableJson.json();

  return {
    ...dataFromAirtable,
  };
};

export const getStructuredDataString = (faqs: FaqsType[]): string => {
  return `{
      "@context": "http://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        ${faqs
          .map((faq) => {
            return (
              '{"@type": "Question","name": "' +
              faq.Vraag.replace('\n', ' ') +
              '","acceptedAnswer": { "@type": "Answer", "text": "' +
              faq.Antwoord.replace('\n', ' ') +
              '"}}'
            );
          })
          .join(',')}
       
      ]
  }`;
};
