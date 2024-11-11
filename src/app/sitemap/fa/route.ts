import { generateSitemapXml } from "../_tools/generate-sitemap-xml";
import { sitemapListFa } from "./sitemap-list-fa";

export const dynamic = "force-static";

export async function GET() {
  return new Response(generateSitemapXml(sitemapListFa), {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",

      "Content-Type": "text/xml",
    },
  });
}
