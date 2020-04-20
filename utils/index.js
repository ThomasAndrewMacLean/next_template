export const add = (a, b) => {
  return a + b;
};

const isProduction = process.env.NODE_ENV === 'production';
export const prefix = isProduction ? '/bumperballs' : '';
