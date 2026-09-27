import { Reveal } from "@/components/reveal/reveal";
import {
	deckHeadings,
	pitchSlides,
	presenterLabels,
	reorderRules,
	slideLabels,
} from "@/data/pitch-deck";
import { slideNumber } from "@/lib/pitch-deck/slide-number";
import { DeckSectionHeading } from "../../_shared/section-heading";
import { SectionShell } from "../../_shared/section-shell";
import { DeckPresenter } from "./deck-presenter";
import { SlideSection } from "./slide-section";

export function DeckSlides() {
	return (
		<SectionShell id="slides" reveal={false}>
			<Reveal>
				<DeckSectionHeading id="slides" heading={deckHeadings.slides} />
			</Reveal>
			<DeckPresenter slides={pitchSlides} labels={presenterLabels}>
				{pitchSlides.map((slide, index) => (
					<Reveal key={slide.id}>
						<SlideSection
							slide={slide}
							number={slideNumber(index)}
							total={pitchSlides.length}
							rule={reorderRules.find((rule) => rule.slideId === slide.id)}
							labels={slideLabels}
						/>
					</Reveal>
				))}
			</DeckPresenter>
		</SectionShell>
	);
}
