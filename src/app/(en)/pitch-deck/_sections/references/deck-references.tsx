import { deckHeadings, pitchReferences } from "@/data/pitch-deck";
import { DeckSectionHeading } from "../../_shared/section-heading";
import { SectionShell } from "../../_shared/section-shell";
import { ReferenceCard } from "./reference-card";

export function DeckReferences() {
	return (
		<SectionShell id="references">
			<DeckSectionHeading id="references" heading={deckHeadings.references} />
			<ul className="mt-10 grid list-none gap-4 sm:grid-cols-2 lg:grid-cols-3">
				{pitchReferences.map((reference) => (
					<li key={reference.url}>
						<ReferenceCard reference={reference} />
					</li>
				))}
			</ul>
		</SectionShell>
	);
}
