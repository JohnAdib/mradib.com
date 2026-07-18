import Link from "next/link";
import { Chapter, chapterLinkClass } from "./chapter";

export function AboutAiFirst() {
	return (
		<Chapter
			index="05"
			era="Now · How I build"
			title="AI belongs in the work, not beside it"
		>
			<p>
				I believe AI belongs inside the way a team works: in code reviews, in
				agents, in the definition of done. Not bolted on as a faster keyboard.
			</p>
			<p>
				In practice that means AI reviewing every pull request, release cycles
				measured in days instead of months, and architecture shaped deliberately
				so that both people and machines can work on it safely. It is also what
				I{" "}
				<Link href="/talks" className={chapterLinkClass}>
					speak about
				</Link>
				: AI-first architecture, design systems, and the quiet art of separation
				of concern.
			</p>
		</Chapter>
	);
}
