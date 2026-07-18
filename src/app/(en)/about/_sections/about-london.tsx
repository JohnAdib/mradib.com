import Link from "next/link";
import { Chapter, chapterLinkClass } from "./chapter";

export function AboutLondon() {
	return (
		<Chapter
			index="04"
			era="2022 · A new chapter"
			title="Then I moved to London"
		>
			<p>
				Late in 2022 my family and I packed up our life and moved to London. Not
				for a title. For the size of the stage.
			</p>
			<p>
				Europe is one of the best places in the world to build right now, and
				London sits at the center of it: a dense, ambitious tech hub where
				world-class teams ship to millions and the bar is set high on purpose. I
				wanted to test myself against that bar. In 2024 the UK endorsed me as{" "}
				<Link href="/awards/uk-global-talent" className={chapterLinkClass}>
					exceptional talent
				</Link>{" "}
				under the Global Talent route.
			</p>
			<p>
				New country, new scale, same job: build things that matter, and help the
				people around me get better at building them.
			</p>
		</Chapter>
	);
}
