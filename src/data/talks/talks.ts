import { urlPodcastSpotify } from "@/data/profile";
import type { IPodcastAppearance, ITalk } from "./talk-interface";

// newest first — drives /talks, the sitemap, and llms.txt
export const talks: ITalk[] = [
	{
		slug: "ai-first-architecture",
		title:
			"AI-First Architecture - Why Single Responsibility Matters More Than Ever",
		event: "AI Coding Summit 2025 (GitNation)",
		city: "Online",
		date: "2025-10-23",
		audience: "5,000+ engineers",
		summary:
			"Why the single responsibility principle becomes critical in AI-first architectures, and how to design systems that work seamlessly with AI tools.",
		slidesPdf:
			"/talks/2025-10-23-ai-first-architecture-why-single-responsibility-matters-more-than-ever.pdf",
		articlePath:
			"/ai-first-architecture-why-single-responsibility-matters-more-than-ever",
		keywords: ["AI-First Architecture", "Single Responsibility", "AI Tools"],
	},
	{
		slug: "turning-chaos-into-control-with-cloudflare",
		title: "Turning Chaos into Control with Cloudflare",
		event: "LNUG #110 — London Node User Group",
		city: "London",
		date: "2025-09-24",
		summary:
			"How to transform chaotic infrastructure into a controlled, scalable system using Cloudflare's tools and a zero-trust approach.",
		slidesPdf:
			"/talks/2025-09-24-turning-chaos-into-control-with-cloudflare.pdf",
		articlePath: "/turning-chaos-into-control-with-cloudflare",
		keywords: ["Cloudflare", "Zero Trust", "Infrastructure", "Node.js"],
	},
	{
		slug: "design-systems-ai-separation-of-concern",
		title: "Design Systems, AI, and the Art of Separation of Concern",
		event: "React Advanced London",
		venue: "Figma's London office",
		city: "London",
		date: "2025-07-03",
		audience: "120+ engineers",
		summary:
			"Seven practical tips to build scalable, maintainable architectures that empower teams and AI tools alike.",
		slidesPdf:
			"/talks/2025-05-03-design-systems-ai-and-the-art-of-separation-of-concern.pdf",
		articlePath: "/design-systems-ai-and-the-art-of-separation-of-concern",
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
