import clsx from "clsx";
import { Reveal } from "@/components/reveal/reveal";
import type { IGuide } from "@/data/guides/guide-bundle";
import { overviewColumns } from "@/lib/guides/grid-columns";
import { stepNumber } from "@/lib/guides/step-number";
import { GuideSectionHeading } from "../shell/section-heading";
import { SectionShell } from "../shell/section-shell";
import { OverviewItem } from "./overview-item";

// Stagger within a row, never across the whole grid.
const staggerMs = 90;

/** Every step as a tappable card: a row on phones, a mini card from sm up. */
export function GuideOverview({ guide }: { guide: IGuide }) {
	const id = guide.anchors.overview;
	const grid = overviewColumns(guide.steps.length);
	return (
		<SectionShell id={id} reveal={false}>
			<Reveal>
				<GuideSectionHeading id={id} heading={guide.headings.overview} />
			</Reveal>
			<ol
				className={clsx("mt-10 grid list-none gap-3 sm:gap-5", grid.className)}
			>
				{guide.steps.map((step, index) => (
					<li key={step.id}>
						<Reveal
							className="h-full"
							delay={(index % grid.columns) * staggerMs}
						>
							<OverviewItem number={stepNumber(index)} step={step} />
						</Reveal>
					</li>
				))}
			</ol>
		</SectionShell>
	);
}
