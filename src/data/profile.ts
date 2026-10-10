import { aiPositioning } from "@/data/ai-positioning";
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
	/** Root relative path of the canonical portrait, used by Person JSON-LD */
	image: string;
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
	titleTag: `John Adib - ${aiPositioning.focusTitle} | MrAdib`,
	image: "/img/john-adib-london-avatar.jpg",
	oneLiner: `Engineering leader in London ${aiPositioning.focus}.`,
	shortBio: `John Adib, engineering leader in London ${aiPositioning.focus}. ${aiPositioning.activities}.`,
	bio50: `John Adib is an engineering leader in London ${aiPositioning.focus}. He brings ${aiPositioning.activities} into one continuous workflow. A two-time founder and Engineering Manager at Zapp, he was named ADPList's World's Most Influential Mentor and has led 600+ mentoring sessions.`,
	bio150: `${aiPositioning.summary} At Zapp, he is an Engineering Manager whose production practice includes AI reviewers on pull requests and a move from monthly to weekly app releases. Across ${experienceYears}+ years building products and teams, he has co-founded two startups, raised $1M, reached one million users in the first month and served 1,200+ businesses. He has taught 2,000+ students and led 600+ mentoring sessions on ADPList, where he was named the World's Most Influential Mentor of 2024 and #1 Mentor in Europe. John holds a UK Global Talent endorsement from Tech Nation, speaks at conferences including AI Coding Summit and React Advanced London, and contributes to open source. His published case study and talks explain the architecture, guardrails and verification behind his AI-first approach.`,
	location: { city: "London", country: "United Kingdom", countryCode: "GB" },
	alternateNames: ["MrAdib", "جان ادیب"],
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
