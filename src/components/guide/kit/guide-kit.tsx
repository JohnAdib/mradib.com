import { Reveal } from "@/components/reveal/reveal";
import { fundraisingKit } from "@/data/guides/fundraising-kit";
import type { IGuideHeading } from "@/data/guides/guide-interface";
import { guideUiLabels } from "@/data/guides/guide-labels";
import { stepNumber } from "@/lib/guides/step-number";
import { GuideSectionHeading } from "../shell/section-heading";
import { SectionShell } from "../shell/section-shell";
import { KitCard } from "./kit-card";

interface IGuideKitProps {
	id: string;
	heading: IGuideHeading;
	/** The current page's path, so its card is marked. The hub passes none. */
	current?: string;
}

// Stagger within a row of three, never across the whole grid.
const columns = 3;
const staggerMs = 90;

/** The six artifacts of the kit as tiles, in the order you build them. */
export function GuideKit({ id, heading, current }: IGuideKitProps) {
	return (
		<SectionShell id={id} reveal={false}>
			<Reveal>
				<GuideSectionHeading id={id} heading={heading} />
			</Reveal>
			<ol className="mt-10 grid list-none grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-6">
				{fundraisingKit.map((entry, index) => (
					<li key={entry.article.pagePath}>
						<Reveal className="h-full" delay={(index % columns) * staggerMs}>
							<KitCard
								number={stepNumber(index)}
								entry={entry}
								current={entry.article.pagePath === current}
								hereLabel={guideUiLabels.here}
							/>
						</Reveal>
					</li>
				))}
			</ol>
		</SectionShell>
	);
}
