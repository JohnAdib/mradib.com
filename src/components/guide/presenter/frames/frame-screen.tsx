import clsx from "clsx";
import type { IFrameOrnamentProps } from "./frame-ornament";

/** A browser window: the title bar with its three dots. */
export function FrameScreen({ size }: IFrameOrnamentProps) {
	const tile = size === "tile";
	const dot = clsx(
		"rounded-full bg-white/25",
		tile ? "h-1.5 w-1.5" : "h-2 w-2",
	);
	return (
		<div
			aria-hidden="true"
			className={clsx(
				"absolute inset-x-0 top-0 -z-10 flex items-center border-b border-white/10 bg-white/5",
				tile ? "h-5 gap-1 px-2.5" : "h-8 gap-1.5 px-4",
			)}
		>
			<span className={dot} />
			<span className={dot} />
			<span className={dot} />
			{tile ? null : (
				<span className="ml-3 h-3 max-w-48 flex-1 rounded-full bg-white/10" />
			)}
		</div>
	);
}
