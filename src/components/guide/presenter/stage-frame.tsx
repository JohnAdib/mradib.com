import clsx from "clsx";
import type { ReactNode } from "react";
import type { GuideFrame } from "@/data/guides/guide-bundle";
import { FrameOrnament } from "./frames/frame-ornament";

// The card takes the shape of the artifact: a 16:9 slide or screen, a
// portrait page, a wider sheet or form. Screens and videos pad the top for
// their chrome.
const shapes: Record<GuideFrame, string> = {
	slide: "aspect-video p-6",
	page: "aspect-[3/4] p-6",
	screen: "aspect-video px-6 pt-12 pb-6",
	video: "aspect-video p-6",
	sheet: "aspect-[4/3] px-6 pt-12 pb-6",
	form: "aspect-[4/3] p-6",
};

/** The dark stage behind the active step, shaped like the artifact. */
export function StageFrame({
	frame,
	children,
}: {
	frame: GuideFrame;
	children: ReactNode;
}) {
	return (
		<div
			className={clsx(
				"relative isolate overflow-hidden rounded-3xl bg-zinc-900 text-white shadow-xl ring-1 ring-zinc-900/10 dark:bg-zinc-800/80 dark:ring-white/10",
				shapes[frame],
			)}
		>
			<div
				aria-hidden="true"
				className="absolute -top-12 -right-12 -z-10 h-44 w-44 rounded-full bg-accent-500/25 blur-3xl"
			/>
			<FrameOrnament frame={frame} />
			{children}
		</div>
	);
}
