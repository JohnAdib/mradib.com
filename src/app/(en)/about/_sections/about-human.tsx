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
				People call tomorrow a mystery. I only half believe them: there is
				uncertainty, and plans bend, but when you plan and put in the work,
				tomorrow answers. I have seen it answer.
			</p>
		</Chapter>
	);
}
