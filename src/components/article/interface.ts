import { StaticImageData } from 'next/image';
import { IBreadcrumbItem } from '../breadcrumb/interface';
import { IFaqQA } from '../faq/faq-interface';

export interface IArticleLayout {
  title: string;
  intro: string;
  urlPath: string;
  keywords: string[];
  coverImage: StaticImageData;
  datePublished: string;
  dateModified: string;
  readTimeMinutes?: number;
  faq?: IFaqQA[];
  breadcrumb?: IBreadcrumbItem[];
  children: React.ReactNode;
}
