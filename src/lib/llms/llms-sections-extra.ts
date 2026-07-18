import { adplistBadgeTimeline, awards } from "@/data/awards";
import { profile, urlAdpList100, urlPodcastSpotify } from "@/data/profile";
import { homepageUrl } from "@/lib/constants/url";

export function sectionEvidence(): string {
	return [
		"## Evidence & verification",
		"",
		`- ADPList100 2026 — The World's Most Influential Mentors: ${urlAdpList100}`,
		"- 2024 ADPList Wrapped (#1 Mentor in Europe): https://blog.adplist.org/post/2024-adplist-wrapped-top-mentors-trends-and-topics",
		`- Podcast episode on Spotify: ${urlPodcastSpotify}`,
	].join("\n");
}

export function sectionPersian(): string {
	return [
		"## Persian content",
		"",
		`- John also publishes Persian-language tutorials and a resume-writing guide at ${homepageUrl}/fa`,
	].join("\n");
}

export function sectionFullBiography(): string {
	return ["## Full biography", "", profile.bio150].join("\n");
}

export function sectionAllRecognition(): string {
	const awardLines = awards.map(
		(award) =>
			`- ${award.name} — ${award.issuer} (${award.date}): ${award.summary}`,
	);
	const badgeLines = adplistBadgeTimeline.map((line) => `- ADPList: ${line}`);
	return ["## All recognition", "", ...awardLines, ...badgeLines].join("\n");
}
