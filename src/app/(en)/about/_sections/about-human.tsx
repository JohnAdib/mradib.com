import Link from "next/link";
import { urlSocial } from "@/lib/constants/url-social";
import { Chapter, chapterLinkClass } from "./chapter";

export function AboutHuman() {
	return (
		<Chapter index="07" era="Off the clock" title="When I close the laptop">
			<p>
				Away from the terminal I am a father of two daughters, and I carry a
				camera almost everywhere. London gives you no excuse not to. The
				freshest frames live in my{" "}
				<Link href="/gallery" className={chapterLinkClass}>
					photography corner
				</Link>
				.
			</p>
			<p>
				I am a regular at this city's developer communities, and I keep an
				open-source habit on{" "}
				<Link
					href={urlSocial.github}
					target="_blank"
					rel="noreferrer"
					className={chapterLinkClass}
				>
					GitHub
				</Link>
				.
			</p>
		</Chapter>
	);
}
