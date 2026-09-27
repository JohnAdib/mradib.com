import type { IGuide } from "@/data/guides/guide-bundle";
import { guideUiLabels } from "@/data/guides/guide-labels";
import { GuideSectionHeading } from "../shell/section-heading";
import { SectionShell } from "../shell/section-shell";
import { ReferenceCard } from "./reference-card";

/** The sources the framework distils, as cards that open in a new tab. */
export function GuideReferences({ guide }: { guide: IGuide }) {
	const id = guide.anchors.references;
	return (
		<SectionShell id={id}>
			<GuideSectionHeading id={id} heading={guide.headings.references} />
			<ul className="mt-10 grid list-none gap-4 sm:grid-cols-2 lg:grid-cols-3">
				{guide.references.map((reference) => (
					<li key={reference.url}>
						<ReferenceCard
							reference={reference}
							readLabel={guideUiLabels.read}
						/>
					</li>
				))}
			</ul>
		</SectionShell>
	);
}
