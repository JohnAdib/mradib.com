import { urlGitNation, urlPodcastSpotify } from "@/data/profile";
import type { IPodcastAppearance, ITalk } from "./talk-interface";

// newest first, drives /talks, the talk pages, the sitemap, and llms.txt
export const talks: ITalk[] = [
	{
		slug: "compound-effect-guardrails",
		path: "/the-compound-effect-of-guardrails-in-the-era-of-ai",
		title: "The Compound Effect of Guardrails in the Era of AI",
		event: "JavaScript London",
		organizer: "JavaScript London",
		logo: "/talks/logos/js-london.png",
		host: "NewDay",
		audience: "130+ attendees",
		city: "London",
		date: "2026-04-29",
		summary:
			"Why guardrails compound over time in AI-assisted engineering, and how small, consistent constraints keep AI-driven codebases safe, fast, and maintainable.",
		slidesPdf:
			"/talks/2026-04-29-the-compound-effect-of-guardrails-in-the-era-of-ai.pdf",
		keywords: ["AI", "Guardrails", "Engineering", "JavaScript"],
	},
	{
		slug: "techlead-conf-adopting-ai",
		path: "/adopting-ai-in-orgs-techlead-conf-london-2025",
		title: "Adopting AI in Orgs",
		format: "panel",
		event: "TechLead Conf London 2025",
		organizer: "TechLead Conf",
		logo: "/talks/logos/techlead-conf.avif",
		city: "London",
		date: "2025-11-28",
		summary:
			"A panel on adopting AI across engineering organizations: what changes for teams, where adoption stalls, and how leaders drive it.",
		keywords: ["AI Adoption", "Engineering Leadership"],
	},
	{
		slug: "ai-first-architecture",
		path: "/ai-first-architecture-why-single-responsibility-matters-more-than-ever",
		title:
			"AI-First Architecture - Why Single Responsibility Matters More Than Ever",
		event: "AI Coding Summit 2025",
		organizer: "GitNation",
		logo: "/talks/logos/ai-coding-summit.avif",
		city: "Online",
		date: "2025-10-23",
		audience: "5,000+ attendees",
		summary:
			"Why the single responsibility principle becomes critical in AI-first architectures, and how to design systems that work seamlessly with AI tools.",
		slidesPdf:
			"/talks/2025-10-23-ai-first-architecture-why-single-responsibility-matters-more-than-ever.pdf",
		providerUrl: urlGitNation,
		keywords: ["AI-First Architecture", "Single Responsibility", "AI Tools"],
	},
	{
		slug: "turning-chaos-into-control-with-cloudflare",
		path: "/turning-chaos-into-control-with-cloudflare",
		title: "Turning Chaos into Control with Cloudflare",
		event: "LNUG",
		organizer: "London Node User Group",
		logo: "/talks/logos/lnug.png",
		host: "Cloudflare",
		audience: "90+ attendees",
		city: "London",
		date: "2025-09-24",
		summary:
			"How to transform chaotic infrastructure into a controlled, scalable system using Cloudflare's tools and a zero-trust approach.",
		slidesPdf:
			"/talks/2025-09-24-turning-chaos-into-control-with-cloudflare.pdf",
		keywords: ["Cloudflare", "Zero Trust", "Infrastructure", "Node.js"],
	},
	{
		slug: "design-systems-ai-separation-of-concern",
		path: "/design-systems-ai-and-the-art-of-separation-of-concern",
		title: "Design Systems, AI, and the Art of Separation of Concern",
		event: "React Advanced London",
		organizer: "React Advanced",
		logo: "/talks/logos/react-advanced.png",
		host: "Figma",
		venue: "Figma's London office",
		city: "London",
		date: "2025-07-03",
		audience: "120+ attendees",
		summary:
			"Seven practical tips to build scalable, maintainable architectures that empower teams and AI tools alike.",
		slidesPdf:
			"/talks/2025-05-03-design-systems-ai-and-the-art-of-separation-of-concern.pdf",
		providerUrl: urlGitNation,
		keywords: ["Design Systems", "AI", "React", "Figma"],
	},
];

export const podcastAppearances: IPodcastAppearance[] = [
	{
		show: "Joe's Room",
		title: "AI, Ownership, and the Future of Engineering",
		url: urlPodcastSpotify,
		duration: "41 min",
		summary:
			"A conversation about AI's impact on engineering productivity, the ownership mindset, and how AI changes hiring and team culture.",
	},
];
