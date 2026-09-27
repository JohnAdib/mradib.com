import type { IPresenterLabels } from "@/data/pitch-deck";
import { slideNumber } from "@/lib/pitch-deck/slide-number";
import { SlideNavLink } from "./slide-nav-link";
import type { IActiveSlide } from "./use-active-slide";

interface IDeckStageProps {
	active: IActiveSlide;
	total: number;
	labels: IPresenterLabels;
}

/** The desktop presenter: the active slide as a 16:9 card, progress, and arrows. */
export function DeckStage({ active, total, labels }: IDeckStageProps) {
	const { slide, index, prev, next } = active;
	return (
		<div>
			<div className="relative isolate aspect-video overflow-hidden rounded-3xl bg-zinc-900 p-6 text-white shadow-xl ring-1 ring-zinc-900/10 dark:bg-zinc-800/80 dark:ring-white/10">
				<div
					aria-hidden="true"
					className="absolute -top-12 -right-12 -z-10 h-44 w-44 rounded-full bg-accent-500/25 blur-3xl"
				/>
				<div
					key={slide.id}
					className="reveal-up flex h-full flex-col justify-between"
				>
					<span className="font-display text-5xl font-semibold leading-none tabular-nums text-white/30">
						{slideNumber(index)}
					</span>
					<div>
						<p className="text-xs font-medium tracking-wide text-accent-300 uppercase">
							{labels.slide} {slideNumber(index)} {labels.of} {total}
						</p>
						<p className="mt-1 font-display text-2xl font-semibold tracking-tight">
							{slide.title}
						</p>
						<p className="mt-1 text-sm text-zinc-300">{slide.question}</p>
					</div>
				</div>
			</div>
			<div className="mt-4 h-1 overflow-hidden rounded-full bg-zinc-900/10 dark:bg-white/10">
				<div
					className="h-full origin-left rounded-full bg-accent-600 transition-transform duration-500 ease-out motion-reduce:transition-none dark:bg-accent-400"
					style={{ transform: `scaleX(${(index + 1) / total})` }}
				/>
			</div>
			<div className="mt-3 flex items-center justify-between">
				<SlideNavLink
					direction="prev"
					href={prev ? `#${prev.id}` : undefined}
					label={labels.previous}
				/>
				<a
					href="#overview"
					className="text-sm font-medium text-zinc-600 transition hover:text-accent-700 dark:text-zinc-400 dark:hover:text-accent-400"
				>
					{labels.all}
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
