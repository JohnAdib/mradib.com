import type { ISiteRoute } from "./route-interface";

// English pages that are not derived from data modules (articles, awards, talks).
// Consumed by the consolidated sitemap and the i18n alternates helpers.
// /resume is intentionally absent: it is covered via the articles data.
// Bump when a page materially changes. Seeded from git history July 2026.
export const routesEn: ISiteRoute[] = [
	{ path: "/", lastModified: "2026-07-19", faPath: "/fa" },
	{ path: "/about", lastModified: "2026-07-19" },
	{ path: "/articles", lastModified: "2026-07-19" },
	{ path: "/awards", lastModified: "2026-07-19" },
	{ path: "/contact", lastModified: "2026-07-19" },
	{ path: "/gallery", lastModified: "2026-07-19" },
	{ path: "/gallery/tools", lastModified: "2026-07-19" },
	{ path: "/mentor", lastModified: "2026-07-19", faPath: "/fa/mentor" },
	{ path: "/now", lastModified: "2026-07-19" },
	{ path: "/smileisgold", lastModified: "2026-07-19" },
	{ path: "/talks", lastModified: "2026-07-19" },
	{ path: "/resume/action-verbs/list", lastModified: "2026-07-18" },
];
