import React, { useContext } from 'react';
import { PictureContext } from '../utils/contexts';
import PropTypes from 'prop-types';
import { getImageUrl } from '../utils';

const Image = ({ imageKey, style }: { imageKey: string; style?: object }) => {
  const pics = useContext(PictureContext);
  return (
    <img
      style={style && { ...style }}
      src={getImageUrl(pics, imageKey, true)}
    ></img>
  );
};

Image.propTypes = {
  imageKey: PropTypes.string.isRequired,
};

export default Image;
