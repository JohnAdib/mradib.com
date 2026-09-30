import { Reveal } from "@/components/reveal/reveal";
import type { IGuide } from "@/data/guides/guide-bundle";
import { stepNumber } from "@/lib/guides/step-number";
import { GuidePresenter } from "../presenter/guide-presenter";
import { GuideSectionHeading } from "../shell/section-heading";
import { SectionShell } from "../shell/section-shell";
import { StepSection } from "./step-section";

/** Every step in full, wrapped in the presenter that tracks the reader. */
export function GuideSteps({ guide }: { guide: IGuide }) {
	const { anchors, steps, rules, stepLabels } = guide;
	const refs = steps.map(({ id, title, question }) => ({
		id,
		title,
		question,
	}));
	return (
		<SectionShell id={anchors.steps} reveal={false}>
			<Reveal>
				<GuideSectionHeading
					id={anchors.steps}
					heading={guide.headings.steps}
				/>
			</Reveal>
			<GuidePresenter
				steps={refs}
				labels={guide.presenterLabels}
				overviewHref={`#${anchors.overview}`}
				frame={guide.frame}
			>
				{steps.map((step, index) => (
					<Reveal key={step.id}>
						<StepSection
							step={step}
							number={stepNumber(index)}
							total={steps.length}
							frame={guide.frame}
							rule={rules.find((rule) => rule.stepId === step.id)}
							rulesHref={`#${anchors.rules}`}
							labels={stepLabels}
						/>
					</Reveal>
				))}
			</GuidePresenter>
		</SectionShell>
	);
}
