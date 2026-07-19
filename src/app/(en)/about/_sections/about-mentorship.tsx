import Link from "next/link";
import { adplistBadges } from "@/data/awards";
import { mentoringStats } from "@/data/mentoring-stats";
import { Chapter, chapterLinkClass } from "./chapter";

export function AboutMentorship() {
	return (
		<Chapter
			index="12"
			era="2024 to now · Full circle"
			title="Back where it started: helping others win"
			slug="mentorship"
		>
			<p>
				The teenager who learned that helping others win beats winning alone
				never really left. Since June 2024 I{" "}
				<Link href="/mentor" className={chapterLinkClass}>
					mentor on ADPList
				</Link>
				, {mentoringStats.sessions}+ sessions and counting, on roadmaps,
				architecture, careers, and the resume, interview, and visa questions
				underneath them. Most weekends I go from one call to the next, meeting
				engineers from countries I have never set foot in.
			</p>
			<p>
				ADPList named me the World's Most Influential Mentor in 2024 and again
				in 2026, and the number one mentor in Europe, alongside{" "}
				{adplistBadges.length} more monthly and quarterly awards, all catalogued
				on the{" "}
				<Link href="/awards" className={chapterLinkClass}>
					awards page
				</Link>
				. I keep the titles in perspective. What I actually chase is the moment
				something finally clicks for someone.
			</p>
			<p>Competitor to coach, engineer to mentor, builder to team leader.</p>
		</Chapter>
	);
}
