import React from 'react';
import * as Styles from './Footer.styles';

type PropsType = {};
const Footer = ({}: PropsType) => {
  return (
    <Styles.FooterWrapper className="fullwidth">
      <div className="content">
        <div>facebook</div>
        <address>contact</address>
      </div>
    </Styles.FooterWrapper>
  );
};

export default Footer;
