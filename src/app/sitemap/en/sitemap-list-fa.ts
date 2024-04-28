import { siteUrl } from '@/lib/constants/url';
import { SitemapType } from '../_tools/sitemap-type';

export const sitemapListFa: SitemapType = [
  {
    url: siteUrl,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 1,
  },
  // static pages
  {
    url: siteUrl + 'about',
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 1,
  },
];