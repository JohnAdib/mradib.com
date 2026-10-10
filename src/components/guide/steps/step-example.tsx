import type { GuideFrame } from "@/data/guides/guide-bundle";
import { StageFrame } from "../presenter/stage-frame";

interface IStepExampleProps {
	label: string;
	text?: string;
	frame: GuideFrame;
}

/** A concrete line, set on the artifact itself. Renders nothing when absent. */
export function StepExample({ label, text, frame }: IStepExampleProps) {
	if (!text) {
		return null;
	}
	return (
		<div className="mt-4">
			<StageFrame frame={frame} size="banner">
				<p className="text-xs font-medium tracking-wide text-accent-300 uppercase">
					{label}
				</p>
				<p className="mt-2 max-w-2xl font-display text-lg font-semibold tracking-tight text-balance sm:text-xl">
					{text}
				</p>
			</StageFrame>
		</div>
	);
}
