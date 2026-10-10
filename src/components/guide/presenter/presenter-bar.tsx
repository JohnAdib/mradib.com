import type { IGuidePresenterLabels } from "@/data/guides/guide-interface";
import { stepNumber } from "@/lib/guides/step-number";
import { PresenterNavLink } from "./presenter-nav-link";
import type { IActiveStep } from "./use-active-step";

interface IPresenterBarProps {
	active: IActiveStep;
	total: number;
	labels: IGuidePresenterLabels;
	overviewHref: string;
}

/**
 * The phone and tablet presenter: a pill pinned to the bottom of the screen
 * while the reader is inside the steps. It must stay the last child of the
 * steps region so sticky bottom holds through every step.
 */
export function PresenterBar({
	active,
	total,
	labels,
	overviewHref,
}: IPresenterBarProps) {
	const { step, index, prev, next } = active;
	return (
		<div className="pointer-events-none sticky bottom-4 z-40 mt-6 flex justify-center xl:hidden">
			<div className="pointer-events-auto flex h-12 w-full max-w-sm items-center justify-between rounded-full bg-surface/90 px-1 shadow-lg shadow-zinc-800/10 ring-1 ring-zinc-900/10 backdrop-blur-sm dark:bg-zinc-800/90 dark:ring-white/10">
				<PresenterNavLink
					direction="prev"
					href={prev ? `#${prev.id}` : undefined}
					label={labels.previous}
				/>
				<a
					href={overviewHref}
					className="min-w-0 flex-1 truncate text-center text-sm font-medium text-zinc-800 dark:text-zinc-100"
				>
					<span className="tabular-nums text-zinc-500 dark:text-zinc-400">
						{stepNumber(index)} / {total}
					</span>
					<span aria-hidden="true" className="px-2 text-zinc-400">
						·
					</span>
					{step.title}
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
