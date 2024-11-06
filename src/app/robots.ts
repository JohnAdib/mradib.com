import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/are-you-okay/",
    },
    sitemap: "https://blog.mradib.com/sitemap.xml",
  };
}
