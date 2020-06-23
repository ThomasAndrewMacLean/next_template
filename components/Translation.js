import React, { useContext, useEffect, useState } from 'react';
import marked from 'marked';
import { TranslationContext } from '../pages/_app';
import PropTypes from 'prop-types';

const Translation = ({ key }) => {
  const [showKeys, setShowKeys] = useState(false);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (document.location.search.includes('showKeys')) {
        setShowKeys(true);
      }
    }
  }, []);
  const translationsFromContext = useContext(TranslationContext);
  const translation = translationsFromContext.find((t) => t.id === key);
  return (
    <span
      className={showKeys ? 'showKeys' : ''}
      dangerouslySetInnerHTML={{
        __html: marked(translation && !showKeys ? translation.NL : key),
      }}
    ></span>
  );
};

Translation.propTypes = {
  key: PropTypes.string.isRequired,
};

export default Translation;
