import React, { useContext, useEffect, useState } from 'react';
import marked from 'marked';
import { TranslationContext } from '../pages/_app';
import PropTypes from 'prop-types';

const Translation = ({ id }) => {
  const [showKeys, setShowKeys] = useState(false);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (document.location.search.includes('showKeys')) {
        setShowKeys(true);
      }
    }
  }, []);
  const translationsFromContext = useContext(TranslationContext);
  const translation = translationsFromContext.find((t) => t.id === id);
  return (
    <span
      className={showKeys ? 'showKeys' : ''}
      dangerouslySetInnerHTML={{
        __html: marked(translation && !showKeys ? translation.NL : id),
      }}
    ></span>
  );
};

Translation.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Translation;
