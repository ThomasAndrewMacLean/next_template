import React, { useContext } from 'react';
import { PictureContext } from '../pages/_app';
import PropTypes from 'prop-types';
import { getImageUrl } from '../utils';

const Image = ({ id }) => {
  const pics = useContext(PictureContext);
  return <img src={getImageUrl(pics, id, true)}></img>;
};

Image.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Image;
