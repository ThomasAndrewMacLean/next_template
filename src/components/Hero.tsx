import React from 'react';
import * as Styles from './Hero.styles';
import { BackgroundImage, Slider } from './';
type PropsType = {};
const Hero = ({}: PropsType) => {
  return (
    <Styles.HeroWrapper className="no-margin-bottom fullwidth">
      <BackgroundImage imageKey="hero-image">
        <div className="content">
          <h1>Hero</h1>
          <button className="btn">button</button>
        </div>

        <Slider
          sliderItems={[
            {
              title: 'test',
              text: 'hellooo',
              image: 'demo-image',
            },
            {
              title: 'test',
              text: 'hellooo',
              image: 'demo-image',
            },
            {
              title: 'test',
              text: 'hellooo',
              image: 'demo-image',
            },
            {
              title: 'test',
              text: 'hellooo',
              image: 'demo-image',
            },
            {
              title: 'test',
              text: 'hellooo',
              image: 'demo-image',
            },
            {
              title: 'test',
              text: 'hellooo',
              image: 'demo-image',
            },
            {
              title: 'test',
              text: 'hellooo',
              image: 'demo-image',
            },
          ]}
        />
      </BackgroundImage>
    </Styles.HeroWrapper>
  );
};

export default Hero;
