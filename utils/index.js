export const add = (a, b) => {
  return a + b;
};

const isProduction = process.env.NODE_ENV === 'production';
export const prefix = isProduction ? '/bumperballs' : '';


export const getImageUrl = (context, id, full) => {
  return full
    ? context.find((p) => p.id === id).pic[0].url
    : context.find((p) => p.id === id).pic[0].thumbnails.large.url;
};
