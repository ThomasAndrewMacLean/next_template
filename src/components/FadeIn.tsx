import React, { useEffect, useState, useRef } from 'react';
import * as Styles from './FadeIn.styles';
import { useIntersection } from 'use-intersection';

type PropsType = {
  children: any;
  beginStyle: any;
  className?: any;
  runFunction?: any;
  addClassToElement?: any;
  runFunctionWhenOutOfScreen?: any;
  waitTime?: any;
  rootMargin?: any;
  animationDuration?: any;
  animateProperty?: any;
};

const FadeIn = ({
  children,
  beginStyle,
  className,
  runFunction,
  addClassToElement,
  runFunctionWhenOutOfScreen,
  waitTime,
  rootMargin = '0px 0px -200px 0px',
  animationDuration = 400,
  animateProperty = 'all',
}: PropsType) => {
  const [trigger, setTrigger] = useState(false);
  const [dynamicClass, setDynamicClass] = useState(className);
  const target = useRef(null);

  const intersecting = useIntersection(target, { rootMargin, threshold: 0.5 });

  useEffect(() => {
    setDynamicClass(className);
  }, [className]);
  useEffect(() => {
    if (target && intersecting && !trigger) {
      if (waitTime) {
        setTimeout(() => {
          setTrigger(true);
        }, waitTime);
      } else {
        setTrigger(true);
      }
    }
    if (target && intersecting && runFunction) {
      runFunction();
    }

    if (target && intersecting && addClassToElement) {
      setDynamicClass(className + ' ' + addClassToElement);
    }

    if (target && !intersecting && runFunctionWhenOutOfScreen) {
      runFunctionWhenOutOfScreen();
    }
  }, [intersecting, trigger, target]);

  return (
    <Styles.FadeInWrap
      animationDuration={animationDuration}
      style={trigger ? {} : beginStyle}
      className={dynamicClass}
      animateProperty={animateProperty}
      ref={target}
    >
      {children}
    </Styles.FadeInWrap>
  );
};

export default FadeIn;
