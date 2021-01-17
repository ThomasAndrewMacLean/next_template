import React from 'react';
import * as Styles from './Hero.styles';
import { BackgroundImage } from './';
type PropsType = {};
const Hero = ({}: PropsType) => {
  return (
    <Styles.HeroWrapper className="no-margin-bottom fullwidth">
      <BackgroundImage fixed imageKey="hero-image">
        <div className="content">
          <h1>Hero</h1>
          <button className="btn">button</button>
        </div>
      </BackgroundImage>
    </Styles.HeroWrapper>
  );
};

export default Hero;
