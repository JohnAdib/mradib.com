// Redirect-only stub routes. These are deliberately excluded from the sitemap and
// consumed by the sitemap parity verifier to prove every page is accounted for.
export const redirectRoutes: string[] = [
	// Social shortlinks, src/app/(social)/
	"/adplist",
	"/facebook",
	"/github",
	"/instagram",
	"/linkedin",
	"/telegram",
	"/tiktok",
	"/twitter",
	"/youtube",
	// English redirects, src/app/(redirect)/
	"/excel",
	"/smile-is-gold",
	// Persian redirects, src/app/fa/(redirect)/
	"/fa/contact",
	"/fa/resume/action-verbs",
	"/fa/resume/ats",
	"/fa/resume/checklist",
	"/fa/resume/contact",
	"/fa/resume/education",
	"/fa/resume/experience",
	"/fa/resume/length",
	"/fa/resume/optional",
	"/fa/resume/sample",
	"/fa/resume/skills",
	"/fa/resume/summary",
	"/fa/resume/template",
];
