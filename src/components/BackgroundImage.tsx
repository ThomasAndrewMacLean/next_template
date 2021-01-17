import React, { ReactNode, useContext } from 'react';
import { PictureContext } from '../utils/contexts';
import { getImageUrl } from '../utils';
import * as Styles from './BackgroundImage.styles';

type PropsType = { imageKey: string; children: ReactNode; fixed: boolean };
const BackgroundImage = ({ imageKey, children, fixed }: PropsType) => {
  const pics = useContext(PictureContext);

  return (
    <Styles.BackgroundImageWrapper
      fixed={fixed}
      imageUrl={getImageUrl(pics, imageKey, true)}
    >
      {children}
    </Styles.BackgroundImageWrapper>
  );
};

export default BackgroundImage;
