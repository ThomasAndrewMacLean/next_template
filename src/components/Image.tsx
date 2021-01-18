import React, { useContext, useState, useEffect } from 'react';
import { PictureContext } from '../utils/contexts';
import PropTypes from 'prop-types';
import { getImageUrl, getImageUrlPreview, getImageHeightWidth } from '../utils';

const defaultStyle = {
  display: 'inline-flex',
  height: 'auto',
};
const Image = ({
  imageKey,
  style = {},
  className = '',
}: {
  imageKey: string;
  style?: object;
  className?: string;
}) => {
  const pics = useContext(PictureContext);
  const [picUrl, setPicUrl] = useState(getImageUrlPreview(pics, imageKey));

  useEffect(() => {
    setPicUrl(getImageUrl(pics, imageKey, true));
  }, []);

  return (
    <img
      style={{ ...defaultStyle, ...style }}
      src={picUrl}
      className={className}
      alt={imageKey}
      loading="lazy"
      height={getImageHeightWidth(pics, imageKey).height}
      width={getImageHeightWidth(pics, imageKey).width}
    ></img>
  );
};

Image.propTypes = {
  imageKey: PropTypes.string.isRequired,
};

export default Image;
