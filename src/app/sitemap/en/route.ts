import { generateSitemapXml } from "../_tools/generate-sitemap-xml";
import { sitemapListFa } from "./sitemap-list-fa";

export async function GET() {
  return new Response(generateSitemapXml(sitemapListFa), {
    headers: {
      "Content-Type": "text/xml",
    },
  });
}
