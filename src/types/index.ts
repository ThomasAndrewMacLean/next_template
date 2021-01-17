export type TranslationsType = {
  id: string;
  NL?: string;
  'NL zonder opmaak'?: string;
};

type ImageType = {
  url: string;
  thumbnails: {
    large: { url: string };
  };
};
export type ImagesType = {
  id: string;
  pic: ImageType[];
};
export type FaqsType = {
  Vraag: string;
  Antwoord: string;
};

export type SEOType = {
  id: string;
  text?: string;
  pic: {
    url: string;
    thumbnails: {
      large: string;
    };
  }[];
};

export type ComponentNameType = 'hero' | 'faq';

export type DataAirtablePromiseType = Promise<{
  props: {
    translations: TranslationsType[];
    pics: ImagesType[];
    seo: SEOType[];
    faqs: FaqsType[];
  };
}>;