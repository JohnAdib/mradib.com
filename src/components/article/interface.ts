import { StaticImageData } from 'next/image';
import { IFaqQA } from '../faq/faq-interface';

export interface IArticleLayout {
  title: string;
  intro: string;
  coverImage: StaticImageData;
  datePublished: string;
  dateModified: string;
  readTimeMinutes?: number;
  faq?: IFaqQA[];
  children: React.ReactNode
}
