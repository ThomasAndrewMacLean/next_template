import { ComponentNameType, PageNameType } from '../types';

export const pageNames: { [key in PageNameType]: PageNameType } = {
  home: 'home',
  about: 'about',
};

export const homePageSections: ComponentNameType[] = ['hero', 'faq'];
