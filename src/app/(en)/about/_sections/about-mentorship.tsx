import Link from "next/link";
import { mentoringStats } from "@/data/mentoring-stats";
import { Chapter, chapterLinkClass } from "./chapter";

export function AboutMentorship() {
	return (
		<Chapter
			index="11"
			era="Now · Full circle"
			title="Back where it started: helping others win"
		>
			<p>
				The teenager who learned that helping others win beats winning alone
				never really left. Today I{" "}
				<Link href="/mentor" className={chapterLinkClass}>
					mentor on ADPList
				</Link>
				, {mentoringStats.sessions}+ sessions and counting, on roadmaps,
				architecture, careers, and the messy human parts nobody writes down.
			</p>
			<p>
				ADPList named me the World's Most Influential Mentor in 2024 and again
				in 2026, and the number one mentor in Europe. I keep the titles in
				perspective. What I actually chase is the moment something finally
				clicks for someone.
			</p>
			<p>
				Competitor to coach, engineer to mentor, builder to team leader. It has
				been the same pattern the whole way through.
			</p>
		</Chapter>
	);
}
