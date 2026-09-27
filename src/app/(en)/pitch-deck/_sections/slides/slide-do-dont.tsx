import type { ISlideLabels } from "@/data/pitch-deck";
import { SlideListCard } from "./slide-list-card";

interface ISlideDoDontProps {
	include: string[];
	avoid: string[];
	labels: ISlideLabels;
}

/** Put on it, and leave off: stacked on phones, side by side from sm. */
export function SlideDoDont({ include, avoid, labels }: ISlideDoDontProps) {
	return (
		<div className="mt-6 grid gap-4 sm:grid-cols-2">
			<SlideListCard title={labels.include} items={include} tone="do" />
			<SlideListCard title={labels.avoid} items={avoid} tone="dont" />
		</div>
	);
}
