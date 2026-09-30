import clsx from "clsx";
import type { ReactNode } from "react";
import type { GuideFrame } from "@/data/guides/guide-bundle";
import { FrameOrnament } from "./frames/frame-ornament";

/** Stage: the presenter and the hero. Tile: overview and kit. Banner: an example line. */
export type StageSize = "stage" | "tile" | "banner";

// The card takes the shape of the artifact: a 16:9 slide or screen, a
// portrait page, a wider sheet or form. Screens and sheets pad the top for
// their chrome; the video banner keeps clear of its recording dot.
const shapes: Record<GuideFrame, Record<StageSize, string>> = {
	slide: { stage: "aspect-video p-6", tile: "aspect-video p-3", banner: "p-6" },
	page: { stage: "aspect-[3/4] p-6", tile: "aspect-[3/4] p-3", banner: "p-6" },
	screen: {
		stage: "aspect-video px-6 pt-12 pb-6",
		tile: "aspect-video px-3 pt-8 pb-3",
		banner: "px-6 pt-14 pb-6",
	},
	video: {
		stage: "aspect-video p-6",
		tile: "aspect-video p-3",
		banner: "p-6 pr-14",
	},
	sheet: {
		stage: "aspect-[4/3] px-6 pt-12 pb-6",
		tile: "aspect-[4/3] px-3 pt-8 pb-3",
		banner: "px-6 pt-14 pb-6",
	},
	form: { stage: "aspect-[4/3] p-6", tile: "aspect-[4/3] p-3", banner: "p-6" },
};

interface IStageFrameProps {
	frame: GuideFrame;
	size?: StageSize;
	className?: string;
	children: ReactNode;
}

/** The dark object behind every artifact on the page, shaped like the artifact. */
export function StageFrame({
	frame,
	size = "stage",
	className,
	children,
}: IStageFrameProps) {
	return (
		<div
			className={clsx(
				"relative isolate overflow-hidden bg-zinc-900 text-white ring-1 ring-zinc-900/10 dark:bg-zinc-800/80 dark:ring-white/10",
				size === "tile" ? "rounded-2xl shadow-md" : "rounded-3xl shadow-xl",
				shapes[frame][size],
				className,
			)}
		>
			<div
				aria-hidden="true"
				className="absolute -top-12 -right-12 -z-10 h-44 w-44 rounded-full bg-accent-500/25 blur-3xl"
			/>
			{size === "stage" ? (
				<div
					aria-hidden="true"
					className="absolute -bottom-16 -left-10 -z-10 h-40 w-40 rounded-full bg-accent-400/10 blur-3xl"
				/>
			) : null}
			<FrameOrnament frame={frame} size={size} />
			{children}
		</div>
	);
}
