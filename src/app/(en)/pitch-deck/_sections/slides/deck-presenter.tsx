"use client";

import type { ReactNode } from "react";
import type { IPitchSlide, IPresenterLabels } from "@/data/pitch-deck";
import { DeckBar } from "./deck-bar";
import { DeckStage } from "./deck-stage";
import { useActiveSlide } from "./use-active-slide";

interface IDeckPresenterProps {
	slides: IPitchSlide[];
	labels: IPresenterLabels;
	/** The server-rendered slide sections. */
	children: ReactNode;
}

/**
 * The one client island on the page. Tracks the active slide by scroll and
 * lays out the slides beside a sticky stage (xl and up) or above a bottom
 * pill (everything smaller). Stage and bar are presentational.
 */
export function DeckPresenter({
	slides,
	labels,
	children,
}: IDeckPresenterProps) {
	const active = useActiveSlide(slides);
	const total = slides.length;
	return (
		<div className="mt-4 xl:grid xl:grid-cols-[minmax(0,1fr)_21rem] xl:gap-12">
			<div className="min-w-0 divide-y divide-zinc-900/5 dark:divide-white/5">
				{children}
			</div>
			<aside className="hidden xl:block xl:sticky xl:top-24 xl:self-start">
				<DeckStage active={active} total={total} labels={labels} />
			</aside>
			<DeckBar active={active} total={total} labels={labels} />
		</div>
	);
}
