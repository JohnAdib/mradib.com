import { urlSocial } from "@/lib/constants/url-social";
import { yearsSince } from "@/lib/datetime/years-since";

export const urlGitNation = "https://gitnation.com/person/mradib";
export const urlAdpList100 =
	"https://adplist.org/adplist100/2026/mentor/john-adib";
export const urlPodcastSpotify =
	"https://open.spotify.com/episode/1EIbLzaxMcK7oWLf9Etqcc";

/** First professional role, freelance frontend, September 2008 */
export const careerStart = "2008-09-01";

/** Whole years of experience, computed at build time. Use this everywhere. */
export const experienceYears = yearsSince(careerStart);

interface IProfileCompany {
	name: string;
	url: string;
}

interface IProfileLocation {
	city: string;
	country: string;
	countryCode: string;
}

interface IProfileEducation {
	school: string;
	degrees: string[];
}

export interface IProfile {
	name: string;
	careerStart: string;
	brand: string;
	email: string;
	jobTitle: string;
	company: IProfileCompany;
	titleTag: string;
	oneLiner: string;
	shortBio: string;
	bio50: string;
	bio150: string;
	location: IProfileLocation;
	alternateNames: string[];
	knowsAbout: string[];
	education: IProfileEducation;
	sameAs: string[];
}

export const profile: IProfile = {
	name: "John Adib",
	careerStart,
	brand: "MrAdib",
	email: "Mr.JohnAdib@Gmail.com",
	jobTitle: "Engineering Manager",
	company: { name: "Zapp", url: "https://www.justzapp.com" },
	titleTag: "John Adib - Engineering Manager, Founder & Mentor | MrAdib",
	oneLiner:
		"Engineering Manager and 2× startup co-founder, pioneering AI-first development in London.",
	shortBio:
		"John Adib (MrAdib), Engineering Manager at Zapp in London, 2× startup co-founder, World's Most Influential Mentor 2024 (ADPList), speaker and AI-first pioneer.",
	bio50: `John Adib (MrAdib) is an Engineering Manager at Zapp in London and a two-time startup co-founder. Named ADPList's World's Most Influential Mentor (2024) and #1 Mentor in Europe (2024), he has spent ${experienceYears}+ years building products and teams, and now pioneers AI-first development, mentoring engineers through 600+ sessions.`,
	bio150: `John Adib is an Engineering Manager at Zapp in London, where he leads teams pioneering AI-first development: AI reviewers on every pull request, releases accelerated from monthly to weekly, and AI agents woven through the whole workflow. Over ${experienceYears}+ years he has co-founded two startups: Sarshomar, which raised $1M and reached one million users in its first month, and Jibres, an e-commerce platform serving 1,200+ businesses that won a national award at the IR Web Festival 2022. A mentor at heart, John has run 600+ sessions on ADPList, where he was named the World's Most Influential Mentor of 2024 and #1 Mentor in Europe. He holds a UK Global Talent endorsement from Tech Nation, speaks at conferences including AI Coding Summit and React Advanced London, contributes to open source, previously taught 2,000+ students, and is a proud father of two daughters.`,
	location: { city: "London", country: "United Kingdom", countryCode: "GB" },
	alternateNames: ["MrAdib", "جان ادیب", "جواد ادیب"],
	knowsAbout: [
		"AI-First Development",
		"Engineering Leadership",
		"Engineering Management",
		"Software Architecture",
		"Design Systems",
		"Mentorship",
		"TypeScript",
		"Node.js",
		"React",
		"Next.js",
		"Google Cloud Platform",
		"Open Source",
	],
	education: {
		school: "Azad University",
		degrees: ["MSc IT Management", "BSc Computer Software Engineering"],
	},
	sameAs: [...Object.values(urlSocial), urlGitNation],
};
