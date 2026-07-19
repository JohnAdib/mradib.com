import type { IOgCard } from "./og-card-interface";

// Social cards for the award pages, the guides, and the personal pages.
export const ogCardsEnDetail: IOgCard[] = [
	{
		slug: "awards-uk-global-talent",
		route: "/awards/uk-global-talent",
		lang: "en",
		eyebrow: "UK Government",
		headline: "Endorsed as exceptional talent.",
		proof:
			"Global Talent visa, technology route. Assessed and endorsed by Tech Nation, 2024.",
	},
	{
		slug: "awards-worlds-most-influential-mentor",
		route: "/awards/worlds-most-influential-mentor",
		lang: "en",
		eyebrow: "ADPList100",
		headline: "The World's Most Influential Mentor.",
		proof:
			"Selected from 32,000+ mentors across 140+ countries. Named 2024, named again 2026.",
		artwork: {
			src: "/awards/2026-adplist100-worlds-most-influential-mentor.jpg",
			fit: "cover",
		},
	},
	{
		slug: "awards-number-1-mentor-in-europe",
		route: "/awards/number-1-mentor-in-europe",
		lang: "en",
		eyebrow: "ADPList Wrapped",
		headline: "#1 Mentor in Europe.",
		proof:
			"Ranked first across the continent in 2024, seven months after his first session.",
		artwork: {
			src: "/awards/2024-adplist-wrapped-number-1-mentor-in-europe.jpg",
			fit: "cover",
		},
	},
	{
		slug: "awards-worldskills",
		route: "/awards/worldskills",
		lang: "en",
		eyebrow: "WorldSkills",
		headline: "Two national medals. Then the coach's seat.",
		proof:
			"Medallion for Excellence 2007. National Silver 2010. Five years coaching medal winners.",
		artwork: { src: "/awards/worldskills-logo.png", fit: "contain" },
	},
	{
		slug: "resume",
		route: "/resume",
		lang: "en",
		eyebrow: "Free Guide",
		headline: "Build a resume that gets read.",
		proof:
			"The complete A to Z of resume writing. Templates, samples, ATS, action verbs.",
	},
	{
		slug: "github-autolink",
		route: "/github-autolink",
		lang: "en",
		eyebrow: "Guide",
		headline: "Wire GitHub to everything.",
		proof:
			"Autolink references: issues, PRs, and commits linked to Jira, Asana, and more, automatically.",
	},
	{
		slug: "gallery",
		route: "/gallery",
		lang: "en",
		eyebrow: "Photography",
		headline: "Off hours, behind a camera.",
		proof: "Portraits and landscapes by John Adib, mostly from London.",
	},
	{
		slug: "gallery-tools",
		route: "/gallery/tools",
		lang: "en",
		eyebrow: "Photography",
		headline: "The kit behind the shots.",
		proof:
			"Canon EOS R8, RF glass, NEEWER studio lighting, and everything else that earns its place.",
	},
	{
		slug: "smileisgold",
		route: "/smileisgold",
		lang: "en",
		eyebrow: "Side Project",
		headline: "A smile, printed and gifted.",
		proof:
			"Street portraits of strangers in London, printed on the spot and given away.",
	},
];
