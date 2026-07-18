import { articlesMeta } from "@/data/articles/articles-meta";
import { adplistBadgeTimeline, flagshipAwards } from "@/data/awards";
import { mentoringStats } from "@/data/mentoring-stats";
import { profile, urlGitNation } from "@/data/profile";
import { podcastAppearances, talks } from "@/data/talks/talks";
import { homepageUrl } from "@/lib/constants/url";
import { urlSocial } from "@/lib/constants/url-social";

export function sectionIdentity(): string {
	return [
		`# ${profile.name} (${profile.brand})`,
		"",
		`> ${profile.bio50}`,
		"",
		`Canonical title: ${profile.oneLiner}`,
		`Location: ${profile.location.city}, ${profile.location.country}. Persian name: جان ادیب.`,
	].join("\n");
}

export function sectionKeyFacts(): string {
	const awardLines = flagshipAwards.map(
		(award) =>
			`- Award: ${award.name} — ${award.issuer}, ${award.date}. ${award.summary}`,
	);
	const talkLines = talks.map((talk) => {
		const venue = talk.venue ? ` at ${talk.venue}` : "";
		const audience = talk.audience ? ` — ${talk.audience}` : "";
		return `- Talk: "${talk.title}" — ${talk.event}${venue}, ${talk.date}${audience}.`;
	});
	const podcastLines = podcastAppearances.map(
		(pod) =>
			`- Podcast: "${pod.title}" on ${pod.show} (Spotify, ${pod.duration}).`,
	);
	return [
		"## Key facts",
		"",
		`- Current role: ${profile.jobTitle} at ${profile.company.name} (${profile.company.url}), London — joined as Senior Software Engineer in December 2024, Engineering Manager since April 2026.`,
		"- AI-first leadership at Zapp: AI reviewers on every pull request, AI agents and skills woven through the workflow, app releases accelerated from monthly to weekly.",
		"- 2× startup co-founder: Sarshomar (Co-Founder & CEO, 2015–2017 — raised $1M, ~1M users in the first month) and Jibres (Co-Founder & CTO, 2019–2022 — e-commerce platform serving 1,200+ businesses).",
		`- Mentoring: ${mentoringStats.sessions}+ free mentorship sessions and ${mentoringStats.minutes.toLocaleString("en-GB")}+ mentoring minutes on ADPList since June 2024 (as of July 2026).`,
		...awardLines,
		`- ADPList recognition: ${adplistBadgeTimeline.join("; ")}.`,
		...talkLines,
		...podcastLines,
		`- Education: ${profile.education.degrees.join("; ")} — ${profile.education.school}.`,
		"- Earlier career: Head of Engineering at Ermile (education platform, 500k+ students); IT lecturer at the University of Tehran; taught 2,000+ students across 4 universities (2006–2017); volunteer CTO of the Khadija Society charity (2017–2022).",
		`- Open-source contributor: ${urlSocial.github}`,
	].join("\n");
}

export function sectionPages(): string {
	const articleLines = articlesMeta.map(
		(article) =>
			`- [${article.title}](${homepageUrl}${article.pagePath}): ${article.description}`,
	);
	return [
		"## Pages",
		"",
		`- [Home](${homepageUrl}/)`,
		`- [About John Adib](${homepageUrl}/about)`,
		`- [Mentorship](${homepageUrl}/mentor): book a free session with John on ADPList.`,
		`- [Articles](${homepageUrl}/articles)`,
		...articleLines,
		`- [Contact](${homepageUrl}/contact)`,
	].join("\n");
}

export function sectionProfiles(): string {
	return [
		"## Profiles",
		"",
		`- LinkedIn: ${urlSocial.linkedin}`,
		`- GitHub: ${urlSocial.github}`,
		`- ADPList (mentor profile): ${urlSocial.adpList}`,
		`- GitNation (speaker profile): ${urlGitNation}`,
		`- X/Twitter: ${urlSocial.twitter}`,
		`- YouTube: ${urlSocial.youtube}`,
		`- Instagram: ${urlSocial.instagram}`,
		`- Telegram: ${urlSocial.telegram}`,
		`- Resume: ${urlSocial.resume}`,
	].join("\n");
}
