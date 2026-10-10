import type { GuideFrame } from "@/data/guides/guide-bundle";
import type { IGuidePresenterLabels } from "@/data/guides/guide-interface";
import { stepNumber } from "@/lib/guides/step-number";
import { PresenterNavLink } from "./presenter-nav-link";
import { StageFrame } from "./stage-frame";
import { StageSlide } from "./stage-slide";
import type { IActiveStep } from "./use-active-step";

interface IPresenterStageProps {
	active: IActiveStep;
	total: number;
	labels: IGuidePresenterLabels;
	overviewHref: string;
	frame: GuideFrame;
}

/** The desktop presenter: the active step on the artifact, progress, and arrows. */
export function PresenterStage({
	active,
	total,
	labels,
	overviewHref,
	frame,
}: IPresenterStageProps) {
	const { step, index, prev, next } = active;
	return (
		<div>
			<StageFrame frame={frame}>
				<StageSlide
					key={step.id}
					className="reveal-up"
					number={stepNumber(index)}
					total={total}
					labels={labels}
					title={step.title}
					question={step.question}
				/>
			</StageFrame>
			<div className="mt-4 h-1 overflow-hidden rounded-full bg-zinc-900/10 dark:bg-white/10">
				<div
					className="h-full origin-left rounded-full bg-accent-600 transition-transform duration-500 ease-out motion-reduce:transition-none dark:bg-accent-400"
					style={{ transform: `scaleX(${(index + 1) / total})` }}
				/>
			</div>
			<div className="mt-3 flex items-center justify-between">
				<PresenterNavLink
					direction="prev"
					href={prev ? `#${prev.id}` : undefined}
					label={labels.previous}
				/>
				<a
					href={overviewHref}
					className="text-sm font-medium text-zinc-600 transition hover:text-accent-700 dark:text-zinc-400 dark:hover:text-accent-400"
				>
					{labels.all}
				</a>
				<PresenterNavLink
					direction="next"
					href={next ? `#${next.id}` : undefined}
					label={labels.next}
				/>
			</div>
		</div>
	);
}
