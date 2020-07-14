import React, { useContext, useEffect, useState } from 'react';
import marked from 'marked';
import { TranslationContext } from '../utils/contexts';
import PropTypes from 'prop-types';

const Translation = ({
  translationKey,
  style,
}: {
  translationKey: string;
  style?: object;
}) => {
  const [showKeys, setShowKeys] = useState(false);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (document.location.search.includes('showKeys')) {
        setShowKeys(true);
      }
    }
  }, []);
  const translationsFromContext = useContext(TranslationContext) || [];
  const translation = translationsFromContext.find(
    (t) => t.id === translationKey
  );

  if (!translationKey) {
    console.error('missing translationkey!');
    return null;
  }

  if (!translation) {
    console.error('missing translation!', translationKey);
    return null;
  }
  // fallback if we dont have a lable
  if (translation && !translation.NL && !translation['NL zonder opmaak']) {
    return null;
  }
  return translation['NL zonder opmaak'] ? (
    translation && !showKeys ? (
      <>{translation['NL zonder opmaak']}</>
    ) : (
      <span className="showKeys">{translationKey}</span>
    )
  ) : (
    <span
      style={{ ...style }}
      className={showKeys ? 'showKeys' : ''}
      dangerouslySetInnerHTML={{
        __html: marked(
          translation && !showKeys ? translation.NL! : translationKey
        ),
      }}
    ></span>
  );
};

Translation.propTypes = {
  translationKey: PropTypes.string.isRequired,
  style: PropTypes.object,
};

// export async function getStaticProps() {
//     // calls page's `getInitialProps` and fills `appProps.pageProps`
//     const texts = await base('Text').select().all();
//     const pics = await base('Images').select().all();

//     return {
//       translations: texts.map((x) => x.fields),
//       pics: pics.map((x) => x.fields),
//     };
//   }
export default Translation;
