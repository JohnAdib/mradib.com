import type { IPresenterLabels } from "@/data/pitch-deck";
import { slideNumber } from "@/lib/pitch-deck/slide-number";
import { SlideNavLink } from "./slide-nav-link";
import type { IActiveSlide } from "./use-active-slide";

interface IDeckBarProps {
	active: IActiveSlide;
	total: number;
	labels: IPresenterLabels;
}

/**
 * The phone and tablet presenter: a pill pinned to the bottom of the screen
 * while the reader is inside the slides. It must stay the last child of the
 * slides region so sticky bottom holds through every slide.
 */
export function DeckBar({ active, total, labels }: IDeckBarProps) {
	const { slide, index, prev, next } = active;
	return (
		<div className="pointer-events-none sticky bottom-4 z-40 mt-6 flex justify-center xl:hidden">
			<div className="pointer-events-auto flex h-12 w-full max-w-sm items-center justify-between rounded-full bg-surface/90 px-1 shadow-lg shadow-zinc-800/10 ring-1 ring-zinc-900/10 backdrop-blur-sm dark:bg-zinc-800/90 dark:ring-white/10">
				<SlideNavLink
					direction="prev"
					href={prev ? `#${prev.id}` : undefined}
					label={labels.previous}
				/>
				<a
					href="#overview"
					className="min-w-0 flex-1 truncate text-center text-sm font-medium text-zinc-800 dark:text-zinc-100"
				>
					<span className="tabular-nums text-zinc-500 dark:text-zinc-400">
						{slideNumber(index)} / {total}
					</span>
					<span aria-hidden="true" className="px-2 text-zinc-400">
						·
					</span>
					{slide.title}
				</a>
				<SlideNavLink
					direction="next"
					href={next ? `#${next.id}` : undefined}
					label={labels.next}
				/>
			</div>
		</div>
	);
}
