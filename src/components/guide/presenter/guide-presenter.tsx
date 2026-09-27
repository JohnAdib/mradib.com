"use client";

import type { ReactNode } from "react";
import type { GuideFrame } from "@/data/guides/guide-bundle";
import type {
	IGuidePresenterLabels,
	IGuideStepRef,
} from "@/data/guides/guide-interface";
import { PresenterBar } from "./presenter-bar";
import { PresenterStage } from "./presenter-stage";
import { useActiveStep } from "./use-active-step";

interface IGuidePresenterProps {
	/** Only what the presenter shows: id, title, question. Never the full text. */
	steps: IGuideStepRef[];
	labels: IGuidePresenterLabels;
	/** The overview anchor, where the pill and the stage link back to. */
	overviewHref: string;
	frame: GuideFrame;
	/** The server-rendered step sections. */
	children: ReactNode;
}

/**
 * The one client island on a guide page. Tracks the active step by scroll and
 * lays out the steps beside a sticky stage (xl and up) or above a bottom pill
 * (everything smaller). Stage and bar are presentational.
 */
export function GuidePresenter({
	steps,
	labels,
	overviewHref,
	frame,
	children,
}: IGuidePresenterProps) {
	const active = useActiveStep(steps);
	const total = steps.length;
	return (
		<div className="mt-4 xl:grid xl:grid-cols-[minmax(0,1fr)_21rem] xl:gap-12">
			<div className="min-w-0 divide-y divide-zinc-900/5 dark:divide-white/5">
				{children}
			</div>
			<aside className="hidden xl:block xl:sticky xl:top-24 xl:self-start">
				<PresenterStage
					active={active}
					total={total}
					labels={labels}
					overviewHref={overviewHref}
					frame={frame}
				/>
			</aside>
			<PresenterBar
				active={active}
				total={total}
				labels={labels}
				overviewHref={overviewHref}
			/>
		</div>
	);
}
