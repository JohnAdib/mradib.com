import Link from "next/link";
import { Chapter, chapterLinkClass } from "./chapter";

export function AboutSpark() {
	return (
		<Chapter
			index="05"
			era="2007 to 2015 · The spark"
			title="It started with a competition"
			slug="worldskills"
		>
			<p>
				An ad crawled across the bottom of a TV screen:{" "}
				<Link href="/awards/worldskills" className={chapterLinkClass}>
					WorldSkills
				</Link>
				, the world's largest vocational skills competition, sometimes called
				the skills olympics. I was fifteen. I went to register and found out I
				had missed the deadline for the 7th national competition. By one day.
			</p>
			<p>
				So I waited a year, and I did not wait idly. At sixteen I entered the
				8th national competition: first in my city, first in my state, then a
				Medallion for Excellence at the national final. That earned a seat at
				the national team camp for WorldSkills Calgary 2009. I was not chosen to
				fly.
			</p>
			<p>
				Three years later, at the 10th national competition, I went first in my
				city, second in my state, and won the national Silver Medal. Another
				camp followed, for WorldSkills London 2011. Again, the plane left
				without me.
			</p>
			<p>
				So I changed sides of the table. From 2010 to 2015 I coached the next
				wave of competitors as a WorldSkills expert and judge, and the people I
				trained went on to win medals of their own. I never got the flight. I
				built the ones who earned theirs, and that turned out to matter more.
			</p>
		</Chapter>
	);
}
