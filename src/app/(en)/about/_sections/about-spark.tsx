import Link from "next/link";
import { Chapter, chapterLinkClass } from "./chapter";

export function AboutSpark() {
	return (
		<Chapter
			index="04"
			era="2007 to 2015 · The spark"
			title="It started with a competition"
			slug="worldskills"
		>
			<p>
				I saw an ad for{" "}
				<Link href="/awards/worldskills" className={chapterLinkClass}>
					WorldSkills
				</Link>
				, the world's largest vocational skills competition, sometimes called
				the skills olympics, and went to register. I was a day late.
				Registration for the 7th national competition had already closed.
			</p>
			<p>
				I came back the next year for the 8th: first in my city, first in my
				state, then a Medallion for Excellence at the national level. That
				earned a place at the national team training camp for WorldSkills
				Calgary 2009, though I wasn't chosen to compete internationally.
			</p>
			<p>
				Three years later, at the 10th national competition, I placed again:
				first in my city, second in my state, a Silver Medal nationally. Another
				camp selection followed, for WorldSkills London 2011, and again I wasn't
				chosen to go.
			</p>
			<p>
				From 2010 to 2015 I moved to the other side of the table, as an expert,
				trainer, and judge, coaching the next wave of competitors. Several of
				them went on to medal themselves.
			</p>
		</Chapter>
	);
}
