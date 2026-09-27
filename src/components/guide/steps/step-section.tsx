import type {
	IGuideRule,
	IGuideStep,
	IGuideStepLabels,
} from "@/data/guides/guide-interface";
import { StepDefinition } from "./step-definition";
import { StepDoDont } from "./step-do-dont";
import { StepExample } from "./step-example";
import { StepHeader } from "./step-header";
import { StepNote } from "./step-note";
import { StepTest } from "./step-test";

interface IStepSectionProps {
	step: IGuideStep;
	number: string;
	total: number;
	/** The rule that bends this step, when one does. */
	rule?: IGuideRule;
	/** Where the rules section lives, for the note's link. */
	rulesHref: string;
	labels: IGuideStepLabels;
}

/** One step. The parts render in this order; change the anatomy of every step here. */
export function StepSection({
	step,
	number,
	total,
	rule,
	rulesHref,
	labels,
}: IStepSectionProps) {
	return (
		<section id={step.id} className="scroll-mt-24 py-10 sm:py-14">
			<StepHeader
				id={step.id}
				number={number}
				total={total}
				title={step.title}
				question={step.question}
				tags={step.tags}
				labels={labels}
			/>
			<StepDefinition text={step.definition} />
			<StepDoDont include={step.include} avoid={step.avoid} labels={labels} />
			<StepTest label={labels.test} text={step.test} />
			<StepExample label={labels.example} text={step.example} />
			<StepNote label={labels.note} rule={rule} href={rulesHref} />
		</section>
	);
}
