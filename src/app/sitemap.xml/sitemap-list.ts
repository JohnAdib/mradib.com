import { siteUrl, siteUrlFa } from '@/lib/constants/url';
import { SitemapType } from './sitemap-type';

export const sitemapList: SitemapType = [
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
  // articles
  {
    url: siteUrlFa + 'mysql-auto-backup',
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 1,
  },
  // resume
  {
    url: siteUrlFa + 'resume',
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 1,
  },
  {
    url: siteUrlFa + 'resume/action-verbs',
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 1,
  },
  {
    url: siteUrlFa + 'resume/ats',
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 1,
  },
  {
    url: siteUrlFa + 'resume/contact',
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 1,
  },
  {
    url: siteUrlFa + 'resume/education',
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 1,
  },
  {
    url: siteUrlFa + 'resume/experience',
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 1,
  },
  {
    url: siteUrlFa + 'resume/length',
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 1,
  },
  {
    url: siteUrlFa + 'resume/optional',
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 1,
  },
  {
    url: siteUrlFa + 'resume/skills',
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 1,
  },
  {
    url: siteUrlFa + 'resume/summary',
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 1,
  },
  {
    url: siteUrlFa + 'resume/template',
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 1,
  },
];