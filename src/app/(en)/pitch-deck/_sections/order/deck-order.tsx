import {
	deckHeadings,
	deckOptionalTitle,
	optionalSlides,
	reorderRules,
} from "@/data/pitch-deck";
import { DeckSectionHeading } from "../../_shared/section-heading";
import { SectionShell } from "../../_shared/section-shell";
import { OptionalSlideChip } from "./optional-slide-chip";
import { RuleCard } from "./rule-card";

export function DeckOrder() {
	return (
		<SectionShell id="order">
			<DeckSectionHeading id="order" heading={deckHeadings.order} />
			<div className="mt-10 grid gap-4 sm:grid-cols-3">
				{reorderRules.map((rule) => (
					<RuleCard key={rule.slideId} rule={rule} />
				))}
			</div>
			<h3 className="mt-12 text-xs font-semibold tracking-wider text-zinc-600 uppercase dark:text-zinc-400">
				{deckOptionalTitle}
			</h3>
			<ul className="mt-4 grid list-none gap-3 sm:grid-cols-2 lg:grid-cols-3">
				{optionalSlides.map((slide) => (
					<OptionalSlideChip key={slide.title} slide={slide} />
				))}
			</ul>
		</SectionShell>
	);
}
