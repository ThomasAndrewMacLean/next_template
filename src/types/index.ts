export type TranslationsType = {
  id: string;
  NL?: string;
  'NL zonder opmaak'?: string;
};

type ImageType = {
  url: string;
  thumbnails: {
    full: { height: number; width: number; url: string };
    large: { height: number; width: number; url: string };
    small: { height: number; width: number; url: string };
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

export type PageNameType = 'home' | 'about';

export type DataAirtablePromiseType = Promise<{
  props: {
    translations: TranslationsType[];
    pics: ImagesType[];
    seo: SEOType[];
    faqs: FaqsType[];
  };
}>;

export type SliderItemType = {
  title: string;
  text: string;
  image: string;
};
