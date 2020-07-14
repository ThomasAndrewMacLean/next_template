export const add = (a, b) => {
  return a + b;
};

const isProduction = process.env.NODE_ENV === 'production';
export const prefix = isProduction ? '/bumperballs' : '';

export const getImageUrl = (context, id, full) => {
  const foundPic = context.find((p) => p.id == id);

  if (!foundPic) {
    console.error('Picture not found!', id);
  }
  return full
    ? foundPic && foundPic.pic[0].url
    : foundPic.pic[0].thumbnails.large.url;
};

export const getSEO = (context, id) => {
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

export const getDataFromAirtable = async () => {
  const url =
    'https://europe-west1-thomasmaclean.cloudfunctions.net/getDataAirtable';
  const dataFromAirtableJson = await fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ airtableApp: process.env.AIRTABLE_APP }),
  });
  const dataFromAirtable = await dataFromAirtableJson.json();

  return {
    ...dataFromAirtable,
  };
};
