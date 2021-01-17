import React, { useRef, useContext } from 'react';
import { PictureContext } from '../utils/contexts';
import { Image } from '.';
import { SliderItemType } from '../types';
import { convertToHtml, getImageUrl } from '../utils';
import * as Styles from './Slider.styles';

type PropsType = { sliderItems: SliderItemType[] };
const Slider = ({ sliderItems }: PropsType) => {
  const sliderRef = useRef(null);
  const pics = useContext(PictureContext);

  const slideLeft = () => {
    //@ts-ignore
    sliderRef.current.scrollBy({
      top: 0,
      left:
        //@ts-ignore
        -sliderRef.current.scrollWidth / sliderRef.current.childElementCount,
      behavior: 'smooth',
    });
  };
  const slideRight = () => {
    //@ts-ignore
    sliderRef.current.scrollBy({
      top: 0,
      //@ts-ignore
      left: sliderRef.current.scrollWidth / sliderRef.current.childElementCount,
      behavior: 'smooth',
    });
  };
  if (!sliderItems.length) return null;
  return (
    // TO BE CHECKED: if wrapped in fullwidth no need for another fullwidth!
    // <Styles.SliderWrapper className="fullwidth">
    <Styles.SliderWrapper>
      <ul ref={sliderRef}>
        {(sliderItems || []).map((item, index) => {
          return (
            <li key={index}>
              <div
                className="wrap"
                style={
                  index === Slider.length - 1 ? { marginRight: '3rem' } : {}
                }
              >
                <img src={getImageUrl(pics, item.image, false)} alt="" />
                <div className="textWrap">
                  <h3>{item.title}</h3>
                  <div
                    className="text"
                    dangerouslySetInnerHTML={{
                      __html: convertToHtml(item.text),
                    }}
                  ></div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>

      <div className="content arrowWrap">
        <button aria-label="vorige" onClick={slideLeft}>
          <Image imageKey="arrowLeft"></Image>
        </button>
        <button onClick={slideRight}>
          <Image aria-label="volgende" imageKey="arrowRight"></Image>
        </button>
      </div>
    </Styles.SliderWrapper>
  );
};

export default Slider;
