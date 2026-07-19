import Link from "next/link";
import { Chapter, chapterLinkClass } from "./chapter";

export function AboutSpark() {
	return (
		<Chapter
			index="05"
			era="2007 to 2015 · The spark"
			title="WorldSkills changed everything"
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
				the national team camp for WorldSkills Calgary 2009, months of training
				with the country's best, though I was not chosen for the international
				final.
			</p>
			<p>
				Three years later, at the 10th national competition, I went first in my
				city, first in my state, and won the national Silver Medal. Then came
				another national team camp, this time for WorldSkills London 2011:
				months of training, and some of the most valuable preparation of my
				life. I did not get to compete in London. Remember that city, though. It
				comes back in this story.
			</p>
			<p>
				So I changed sides of the table. As a WorldSkills expert and judge from
				2010 to 2015, I privately trained three competitors, across different
				years, and every one of them became a national medalist. Then I taught
				at the national team camps myself, preparing the next generation,
				including for WorldSkills São Paulo 2015. The kid who missed a deadline
				by one day ended up building champions.
			</p>
			<p>
				That competition rewired me: learn a skill fast, apply it faster, hold
				it to a professional bar. Everything since has run on that engine.
			</p>
		</Chapter>
	);
}
