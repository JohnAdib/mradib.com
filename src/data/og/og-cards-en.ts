import type { IOgCard } from "./og-card-interface";

const portrait = { src: "/img/john-adib-hero.jpg", fit: "cover" } as const;

// Social cards for the English hub and identity pages.
export const ogCardsEn: IOgCard[] = [
	{
		slug: "home",
		route: "/",
		lang: "en",
		eyebrow: "I build. I teach. I mentor.",
		headline: "John Adib",
		proof:
			"Engineering Manager in London. Entrepreneur, twice. The World's Most Influential Mentor.",
		artwork: portrait,
	},
	{
		slug: "about",
		route: "/about",
		lang: "en",
		eyebrow: "The Story",
		headline: "From a first computer to the world stage.",
		proof:
			"Entrepreneur, twice. The World's Most Influential Mentor. UK Global Talent.",
		artwork: portrait,
	},
	{
		slug: "articles",
		route: "/articles",
		lang: "en",
		eyebrow: "Guides",
		headline: "Written to be definitive.",
		proof:
			"The A to Z of resume building, and the complete guide to GitHub Autolink references.",
	},
	{
		slug: "awards",
		route: "/awards",
		lang: "en",
		eyebrow: "Recognition",
		headline: "Every award, with the evidence.",
		proof:
			"World's Most Influential Mentor. #1 in Europe. UK Global Talent. WorldSkills medalist.",
	},
	{
		slug: "contact",
		route: "/contact",
		lang: "en",
		eyebrow: "Contact",
		headline: "No forms. No gatekeepers.",
		proof: "One open inbox. Mentorship and speaking invitations welcome.",
		artwork: portrait,
	},
	{
		slug: "mentor",
		route: "/mentor",
		lang: "en",
		eyebrow: "Mentorship",
		headline: "600+ sessions. #1 Mentor in Europe.",
		proof:
			"Book a 1:1 with the World's Most Influential Mentor, ADPList 2024. Careers, resumes, tech immigration.",
		artwork: portrait,
	},
	{
		slug: "now",
		route: "/now",
		lang: "en",
		eyebrow: "Now",
		headline: "Building AI-first at Zapp, London.",
		proof:
			"AI reviewers on every pull request. Releases from monthly to weekly. Updated July 2026.",
	},
	{
		slug: "talks",
		route: "/talks",
		lang: "en",
		eyebrow: "Speaking",
		headline: "Stages that define AI-first engineering.",
		proof:
			"AI Coding Summit, 5,000+ engineers. React Advanced at Figma. JavaScript London.",
	},
	{
		slug: "resume-review",
		route: "/resume/review",
		lang: "en",
		eyebrow: "Review a CV",
		headline: "Score a CV out of 100.",
		proof:
			"Grade every section, flag each issue with its fix, and send the result as one link.",
	},
	{
		slug: "resume-checklist",
		route: "/resume/checklist",
		lang: "en",
		eyebrow: "CV review",
		headline: "Your CV, reviewed.",
		proof: "Scored out of 100 section by section, with the fix for each issue.",
	},
];
