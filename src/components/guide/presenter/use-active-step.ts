import { useScrollSpy } from "@/components/toc/use-scroll-spy";
import type { IGuideStepRef } from "@/data/guides/guide-interface";

export interface IActiveStep {
	index: number;
	step: IGuideStepRef;
	prev?: IGuideStepRef;
	next?: IGuideStepRef;
}

/** The step the reader is on, from scroll position. Step 1 before any scroll. */
export function useActiveStep(steps: IGuideStepRef[]): IActiveStep {
	const activeId = useScrollSpy(steps.map((step) => step.id));
	const found = steps.findIndex((step) => step.id === activeId);
	const index = found < 0 ? 0 : found;
	return {
		index,
		step: steps[index],
		prev: steps[index - 1],
		next: steps[index + 1],
	};
}
