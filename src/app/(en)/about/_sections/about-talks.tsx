import Link from "next/link";
import { Chapter, chapterLinkClass } from "./chapter";

export function AboutTalks() {
	return (
		<Chapter
			index="14"
			era="Summer 2025 · On stage, in English"
			title="Started big, at Figma's office"
			slug="talks"
		>
			<p>
				In July 2025 I stepped on stage again, for the first time in English. A
				new country, a new culture, new rules of the room, layered on top of the
				same presence built over years of six-hour sessions. And I started big:
				my first talk was at Figma's office in London, a company I have admired
				for years, in front of 120+ engineers.
			</p>
			<p>
				Walking off that stage I knew: if I can do this, I can do more. There
				has been at least one talk every quarter since, from Cloudflare to the
				AI Coding Summit and its 5,000+ engineers, all listed on the{" "}
				<Link href="/talks" className={chapterLinkClass}>
					talks page
				</Link>
				. Giving back to the community stopped being a plan and became a habit.
			</p>
		</Chapter>
	);
}
