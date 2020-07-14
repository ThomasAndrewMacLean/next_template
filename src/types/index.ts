export type TranslationsType = {
  id: string;
  NL?: string;
  'NL zonder opmaak'?: string;
};

export type ImagesType = {
  id: string;
  pic: {
    url: string;
    thumbnails: {
      large: string;
    };
  }[];
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
