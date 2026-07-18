import Link from "next/link";
import { Chapter, chapterLinkClass } from "./chapter";

export function AboutSpark() {
	return (
		<Chapter
			index="01"
			era="2007 to 2010 · The spark"
			title="It started with a competition"
		>
			<p>
				As a teenager I entered{" "}
				<Link href="/awards/worldskills" className={chapterLinkClass}>
					WorldSkills
				</Link>
				, the world's largest vocational skills competition, sometimes called
				the skills olympics. Timed challenges, real software, complete and
				working against the clock, judged on the details most users never see.
			</p>
			<p>
				I competed nationally in IT software and came away a national medalist,
				with a Medallion for Excellence along the way and two selections to the
				national team training camps. That competition changed my life. It
				taught me to build under pressure, and it set the direction for
				everything that came after.
			</p>
		</Chapter>
	);
}
