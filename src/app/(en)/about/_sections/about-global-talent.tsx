import Link from "next/link";
import { Chapter, chapterLinkClass } from "./chapter";

export function AboutGlobalTalent() {
	return (
		<Chapter
			index="13"
			era="September 2024 · Global Talent"
			title="Endorsed as exceptional talent"
			slug="talent"
		>
			<p>
				Two years into the restart I made another deliberate choice. I wanted
				freedom: my place in this country earned by my own work, tied to no
				employer. Preparing the evidence took a long time. In September 2024,
				the UK endorsed me as{" "}
				<Link href="/awards/uk-global-talent" className={chapterLinkClass}>
					exceptional talent
				</Link>{" "}
				in technology, under the Global Talent route.
			</p>
			<p>
				There's no sponsor on that route and no shortcuts. An endorsing body
				examines your last five years of evidence and decides if you qualify. I
				applied in the innovation category, as a leader in the industry, with
				the work to back it, and the answer came back yes.
			</p>
			<p>
				Two years earlier I had arrived needing a sponsor. Now the UK said:
				stay, on your own merit. In December 2025, three years after landing,
				came settled status. This city is home now. I hold this endorsement the
				closest.
			</p>
		</Chapter>
	);
}
