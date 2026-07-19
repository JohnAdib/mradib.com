import type { ISiteRoute } from "./route-interface";

// Persian-only pages with no English counterpart (route groups do not change URLs).
// Paired Persian pages (/fa, /fa/mentor, /fa/resume) derive from English faPath and
// article faPath, so they are never listed here to avoid stating a fact twice.
// Bump when a page materially changes. Seeded from git history July 2026.
export const routesFa: ISiteRoute[] = [
	{ path: "/fa/excel", lastModified: "2025-03-01" },
	{ path: "/fa/powerpoint", lastModified: "2025-03-01" },
	{ path: "/fa/word", lastModified: "2025-03-01" },
	{ path: "/fa/cover-letter", lastModified: "2025-03-01" },
	{ path: "/fa/mysql-auto-backup", lastModified: "2026-07-18" },
	{ path: "/fa/resume/action-verbs/list", lastModified: "2025-03-01" },
];
