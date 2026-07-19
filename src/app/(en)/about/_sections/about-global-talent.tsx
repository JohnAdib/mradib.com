import Link from "next/link";
import { Chapter, chapterLinkClass } from "./chapter";

export function AboutGlobalTalent() {
	return (
		<Chapter
			index="11"
			era="September 2024 · Exceptional talent"
			title="Sixteen years, one endorsement"
			slug="talent"
		>
			<p>
				In September 2024, the UK endorsed me as{" "}
				<Link href="/awards/uk-global-talent" className={chapterLinkClass}>
					exceptional talent
				</Link>{" "}
				in technology, under the Global Talent route.
			</p>
			<p>
				There's no sponsor on that route. An endorsing body reviews years of
				evidence and decides if you qualify. Mine was sixteen years in the
				making: two startups, thousands of students, WorldSkills medals, and
				everything in between.
			</p>
			<p>
				Two years earlier I had arrived needing a sponsor. Now the UK had looked
				at everything I built and said: stay, on your own merit. I hold this one
				the closest.
			</p>
		</Chapter>
	);
}
