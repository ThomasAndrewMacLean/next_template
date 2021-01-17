import { createContext } from 'react';
import { TranslationsType, SEOType, ImagesType, FaqsType } from '../types';

export const TranslationContext = createContext<TranslationsType[]>([]);
export const PictureContext = createContext<ImagesType[]>([]);
export const SEOContext = createContext<SEOType[]>([]);
export const FaqContext = createContext<FaqsType[]>([]);
