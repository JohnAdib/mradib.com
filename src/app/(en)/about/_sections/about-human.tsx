import Link from "next/link";
import { Chapter, chapterLinkClass } from "./chapter";

export function AboutHuman() {
	return (
		<Chapter
			index="16"
			era="Off the clock"
			title="When I close the laptop"
			slug="human"
		>
			<p>Away from the terminal I am a father of two lovely daughters.</p>
			<p>
				Remember the Canon A640 from my first teaching salary? It became a Nikon
				D5300, which became a Canon EOS R8 with a full studio setup, all{" "}
				<Link href="/gallery/tools" className={chapterLinkClass}>
					listed here
				</Link>
				. The freshest frames live in my{" "}
				<Link href="/gallery" className={chapterLinkClass}>
					photography corner
				</Link>
				.
			</p>
			<p>
				A line I try to live by: yesterday is history, tomorrow is a mystery,
				today is a gift. That is why they call it the present.
			</p>
		</Chapter>
	);
}
