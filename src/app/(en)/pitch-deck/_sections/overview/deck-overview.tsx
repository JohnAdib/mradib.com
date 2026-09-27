import { Reveal } from "@/components/reveal/reveal";
import { deckHeadings, pitchSlides } from "@/data/pitch-deck";
import { slideNumber } from "@/lib/pitch-deck/slide-number";
import { DeckSectionHeading } from "../../_shared/section-heading";
import { SectionShell } from "../../_shared/section-shell";
import { OverviewItem } from "./overview-item";

// Stagger within a row of four, never across the whole grid.
const columns = 4;
const staggerMs = 90;

export function DeckOverview() {
	return (
		<SectionShell id="overview" reveal={false}>
			<Reveal>
				<DeckSectionHeading id="overview" heading={deckHeadings.overview} />
			</Reveal>
			<ol className="mt-10 grid list-none gap-3 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 xl:grid-cols-4">
				{pitchSlides.map((slide, index) => (
					<li key={slide.id}>
						<Reveal className="h-full" delay={(index % columns) * staggerMs}>
							<OverviewItem number={slideNumber(index)} slide={slide} />
						</Reveal>
					</li>
				))}
			</ol>
		</SectionShell>
	);
}
