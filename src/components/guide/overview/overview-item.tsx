import type { GuideFrame } from "@/data/guides/guide-bundle";
import type { IGuideStepRef } from "@/data/guides/guide-interface";
import { StageFrame } from "../presenter/stage-frame";

interface IOverviewItemProps {
	number: string;
	step: IGuideStepRef;
	frame: GuideFrame;
}

/** One step as a miniature of the artifact. Tap it to jump to the step. */
export function OverviewItem({ number, step, frame }: IOverviewItemProps) {
	return (
		<a
			href={`#${step.id}`}
			className="group block h-full rounded-2xl transition hover:-translate-y-1 motion-reduce:transition-none"
		>
			<StageFrame
				frame={frame}
				size="tile"
				className="h-full transition group-hover:shadow-lg group-hover:shadow-accent-500/20 group-hover:ring-accent-400/60 motion-reduce:transition-none"
			>
				<div className="flex h-full flex-col justify-between gap-2">
					<span className="font-display text-2xl font-semibold leading-none tabular-nums text-white/30 sm:text-3xl">
						{number}
					</span>
					<span className="min-w-0">
						<span className="block text-sm font-semibold leading-tight text-balance text-white transition-colors group-hover:text-accent-300 sm:text-base">
							{step.title}
						</span>
						<span className="mt-1 hidden text-xs leading-5 text-zinc-400 sm:line-clamp-2">
							{step.question}
						</span>
					</span>
				</div>
			</StageFrame>
		</a>
	);
}
