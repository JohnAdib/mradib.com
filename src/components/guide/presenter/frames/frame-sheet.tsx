import clsx from "clsx";
import type { IFrameOrnamentProps } from "./frame-ornament";

const rows = {
	stage:
		"inset-x-6 top-8 bottom-24 bg-[repeating-linear-gradient(to_bottom,transparent_0,transparent_27px,rgba(255,255,255,0.07)_27px,rgba(255,255,255,0.07)_28px)]",
	tile: "inset-x-3 top-5 bottom-10 bg-[repeating-linear-gradient(to_bottom,transparent_0,transparent_11px,rgba(255,255,255,0.07)_11px,rgba(255,255,255,0.07)_12px)]",
	banner:
		"inset-x-6 top-8 bottom-6 bg-[repeating-linear-gradient(to_bottom,transparent_0,transparent_27px,rgba(255,255,255,0.07)_27px,rgba(255,255,255,0.07)_28px)]",
};

/** A spreadsheet: a header band and faint ruled rows, horizontal only. */
export function FrameSheet({ size }: IFrameOrnamentProps) {
	return (
		<div aria-hidden="true" className="absolute inset-0 -z-10">
			<div
				className={clsx(
					"absolute inset-x-0 top-0 border-b border-white/10 bg-white/5",
					size === "tile" ? "h-5" : "h-8",
				)}
			/>
			<div className={clsx("absolute", rows[size])} />
		</div>
	);
}
