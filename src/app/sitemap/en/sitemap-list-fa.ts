import { siteUrl } from "@/lib/constants/url";
import { SitemapType } from "../_tools/sitemap-type";

export const sitemapListFa: SitemapType = [
  {
    url: siteUrl,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 1,
  },
  // static pages
  {
    url: siteUrl + "about",
    lastModified: new Date(),
    changeFrequency: "daily",
    priority: 1,
  },
  // articles list
  {
    url: siteUrl + "articles",
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.9,
  },
  // articles
  {
    url: siteUrl + "github-autolink",
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  },
];
