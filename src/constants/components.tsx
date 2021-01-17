import { Hero, Faq } from '../components';
import { ComponentNameType } from '../types';

export const componentMap: { [component in ComponentNameType]: JSX.Element } = {
  hero: <Hero></Hero>,
  faq: <Faq></Faq>,
};
