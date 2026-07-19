import type { MetadataRoute } from "next";
import { buildContentEntries } from "@/lib/sitemap/build-content-entries";
import { buildStaticEntries } from "@/lib/sitemap/build-static-entries";

export const dynamic = "force-static";

// priority and changeFrequency are deliberately omitted. Google ignores both.
export default function sitemap(): MetadataRoute.Sitemap {
	return [...buildStaticEntries(), ...buildContentEntries()];
}
