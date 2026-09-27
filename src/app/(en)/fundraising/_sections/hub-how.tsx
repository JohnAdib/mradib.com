import { GuideSectionHeading } from "@/components/guide/shell/section-heading";
import { SectionShell } from "@/components/guide/shell/section-shell";
import { hubCopy } from "@/data/guides/hub-copy";
import { stepNumber } from "@/lib/guides/step-number";
import { HubHowStep } from "./hub-how-step";

/** The method behind the kit: write the facts once, then shape them, in four moves. */
export function HubHow() {
	const id = hubCopy.anchors.how;
	return (
		<SectionShell id={id}>
			<GuideSectionHeading id={id} heading={hubCopy.headings.how} />
			<ol className="mt-10 grid list-none gap-4 sm:grid-cols-2">
				{hubCopy.how.map((step, index) => (
					<HubHowStep
						key={step.title}
						number={stepNumber(index)}
						title={step.title}
						text={step.text}
					/>
				))}
			</ol>
		</SectionShell>
	);
}
