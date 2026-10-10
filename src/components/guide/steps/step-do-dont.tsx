import type { IGuideStepLabels } from "@/data/guides/guide-interface";
import { StepListCard } from "./step-list-card";

interface IStepDoDontProps {
	include: string[];
	avoid: string[];
	labels: IGuideStepLabels;
}

/** Put in, and leave out: stacked on phones, side by side from sm. */
export function StepDoDont({ include, avoid, labels }: IStepDoDontProps) {
	return (
		<div className="mt-6 grid gap-4 sm:grid-cols-2">
			<StepListCard title={labels.include} items={include} tone="do" />
			<StepListCard title={labels.avoid} items={avoid} tone="dont" />
		</div>
	);
}
