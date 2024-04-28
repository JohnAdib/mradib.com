import { siteUrl } from '@/lib/constants/url';
import { SitemapType } from './sitemap-type';

export const sitemapList: SitemapType = [
  {
    url: siteUrl + '/',
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 1,
  },
  // static pages
  {
    url: siteUrl + '/about',
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 1,
  },
  // articles
  {
    url: siteUrl + '/mysql-auto-backup',
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 1,
  },
  // resume
  {
    url: siteUrl + '/resume',
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 1,
  },
  {
    url: siteUrl + '/resume/action-verbs',
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 1,
  },
  {
    url: siteUrl + '/resume/ats',
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 1,
  },
  {
    url: siteUrl + '/resume/contact',
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 1,
  },
  {
    url: siteUrl + '/resume/education',
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 1,
  },
  {
    url: siteUrl + '/resume/experience',
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 1,
  },
  {
    url: siteUrl + '/resume/length',
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 1,
  },
  {
    url: siteUrl + '/resume/optional',
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 1,
  },
  {
    url: siteUrl + '/resume/skills',
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 1,
  },
  {
    url: siteUrl + '/resume/summary',
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 1,
  },
  {
    url: siteUrl + '/resume/template',
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 1,
  },
];