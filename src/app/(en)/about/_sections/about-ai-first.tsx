import Link from "next/link";
import { Chapter, chapterLinkClass } from "./chapter";

export function AboutAiFirst() {
	return (
		<Chapter
			index="12"
			era="Now · How I build"
			title="AI belongs in the work, not beside it"
			slug="ai"
		>
			<p>
				I believe AI belongs inside the way a team works: in code reviews, in
				agents, in the definition of done. Not bolted on as a faster keyboard.
			</p>
			<p>
				In practice that means AI reviewing every pull request, release cycles
				measured in days instead of months, and architecture shaped deliberately
				so both people and machines can work on it safely. I use it every day,
				including weekends. I will not stand on a stage and preach a workflow I
				do not live.
			</p>
			<p>
				Since 2025 that is what I{" "}
				<Link href="/talks" className={chapterLinkClass}>
					speak about
				</Link>{" "}
				at London developer events, from a session at Figma's office to a talk
				with Cloudflare, and to 5,000+ engineers at the AI Coding Summit.
			</p>
		</Chapter>
	);
}
