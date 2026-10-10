import { aiEvidence } from "@/data/ai-evidence";
import { adplistBadgeTimeline, awards } from "@/data/awards";
import { fundraisingKit } from "@/data/guides/fundraising-kit";
import { hubRoute } from "@/data/guides/hub-route";
import { profile, urlAdpList100, urlPodcastSpotify } from "@/data/profile";
import { homepageUrl } from "@/lib/constants/url";

export function sectionEvidence(): string {
	return [
		"## Evidence & verification",
		"",
		`- ADPList100 2026, The World's Most Influential Mentors: ${urlAdpList100}`,
		"- 2024 ADPList Wrapped (#1 Mentor in Europe): https://blog.adplist.org/post/2024-adplist-wrapped-top-mentors-trends-and-topics",
		`- Podcast episode on Spotify: ${urlPodcastSpotify}`,
	].join("\n");
}

export function sectionAiDevelopment(): string {
	return [
		"## AI-first software development",
		"",
		profile.oneLiner,
		...aiEvidence.flatMap((evidence) => [
			`- ${evidence.kind}: [${evidence.title}](${homepageUrl}${evidence.path}), ${evidence.date}. ${evidence.summary}`,
			...(evidence.recordingUrl
				? [`  Recording and transcript: ${evidence.recordingUrl}`]
				: []),
		]),
	].join("\n");
}

export function sectionAiTools(): string {
	return [
		"## Guides for AI",
		"",
		`- Machine-readable resume-writing method (the MrAdib method): ${homepageUrl}/resume/llms.txt (Persian: ${homepageUrl}/fa/resume/llms.txt)`,
		`- Portable resume-writing skill for AI tools: ${homepageUrl}/resume/skill.md (Persian: ${homepageUrl}/fa/resume/skill.md)`,
		`- Review a resume and score it out of 100: ${homepageUrl}/resume/checklist`,
		`- The fundraising kit, an index of six frameworks for AI: ${homepageUrl}${hubRoute}/llms.txt`,
		...fundraisingKit.flatMap((entry) => {
			const name = entry.name.toLowerCase();
			const url = `${homepageUrl}${entry.article.pagePath}`;
			return [
				`- Machine-readable ${name} framework: ${url}/llms.txt`,
				`- Portable ${name} skill for AI tools: ${url}/skill.md`,
			];
		}),
	].join("\n");
}

export function sectionPersian(): string {
	return [
		"## Persian content",
		"",
		`- John also publishes Persian-language tutorials and a resume-writing guide at ${homepageUrl}/fa`,
		`- The complete single-page Persian resume-writing guide is at ${homepageUrl}/fa/resume`,
	].join("\n");
}

export function sectionFullBiography(): string {
	return ["## Full biography", "", profile.bio150].join("\n");
}

export function sectionAllRecognition(): string {
	const awardLines = awards.map(
		(award) =>
			`- ${award.name} (${award.issuer}, ${award.date}): ${award.summary}`,
	);
	const badgeLines = adplistBadgeTimeline.map((line) => `- ADPList: ${line}`);
	return ["## All recognition", "", ...awardLines, ...badgeLines].join("\n");
}
