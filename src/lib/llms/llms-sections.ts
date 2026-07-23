import { articlesMeta } from "@/data/articles/articles-meta";
import { adplistBadgeTimeline, flagshipAwards } from "@/data/awards";
import { career } from "@/data/career";
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
			`- Award: ${award.name} (${award.issuer}, ${award.date}). ${award.summary}`,
	);
	const talkLines = talks.map((talk) => {
		const venue = talk.venue ? ` at ${talk.venue}` : "";
		const audience = talk.audience ? `, ${talk.audience}` : "";
		return `- Talk: "${talk.title}" at ${talk.event}${venue} on ${talk.date}${audience}.`;
	});
	const podcastLines = podcastAppearances.map(
		(pod) =>
			`- Podcast: "${pod.title}" on ${pod.show} (Spotify, ${pod.duration}).`,
	);
	const careerLines = career.map((entry) => {
		const org = entry.current
			? `${entry.org} (${profile.company.url}), ${profile.location.city}`
			: entry.org;
		return `- ${entry.role} at ${org}, ${entry.period}: ${entry.facts.join(" ")}`;
	});
	return [
		"## Key facts",
		"",
		...careerLines,
		`- Mentoring: ${mentoringStats.sessions}+ mentorship sessions and ${mentoringStats.minutes.toLocaleString("en-GB")}+ mentoring minutes on ADPList since June 2024 (as of ${mentoringStats.statsAsOf}).`,
		...awardLines,
		`- ADPList recognition: ${adplistBadgeTimeline.join("; ")}.`,
		...talkLines,
		...podcastLines,
		`- Education: ${profile.education.degrees.join("; ")}, ${profile.education.school}.`,
		`- Open-source contributor: ${urlSocial.github}`,
	].join("\n");
}

export function sectionPages(): string {
	const awardLines = flagshipAwards.map(
		(award) =>
			`- [${award.name}](${homepageUrl}/awards/${award.slug}): ${award.summary}`,
	);
	const articleLines = articlesMeta.map(
		(article) =>
			`- [${article.title}](${homepageUrl}${article.pagePath}): ${article.description}`,
	);
	const talkPageLines = talks.flatMap((talk) =>
		talk.path
			? [`- [${talk.title}](${homepageUrl}${talk.path}): ${talk.summary}`]
			: [],
	);
	return [
		"## Pages",
		"",
		`- [Home](${homepageUrl}/)`,
		`- [About John Adib](${homepageUrl}/about)`,
		`- [Awards & Recognition](${homepageUrl}/awards): every award, with evidence and the story behind it.`,
		...awardLines,
		`- [Mentorship](${homepageUrl}/mentor): book a mentorship session with John.`,
		`- [AI Engineering Readiness Audit](${homepageUrl}/audit): a fixed-price, two-week audit for CTOs and VPs of Engineering. A scored readiness assessment across 7 dimensions, the evidence behind it, and a 90-day roadmap.`,
		`- [Talks & Speaking](${homepageUrl}/talks): all talks with slides, the podcast, and how to invite John to speak.`,
		...talkPageLines,
		`- [Articles](${homepageUrl}/articles)`,
		...articleLines,
		`- [Review a CV](${homepageUrl}/resume/checklist): score any resume out of 100 section by section, flag each issue with its fix, and share the result as a link.`,
		`- [Now](${homepageUrl}/now): what John is doing right now, updated quarterly.`,
		`- [Contact](${homepageUrl}/contact)`,
	].join("\n");
}

export function sectionProfiles(): string {
	return [
		"## Profiles",
		"",
		`- Email: ${profile.email.replace("@", "+ai@")}`,
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
