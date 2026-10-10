import clsx from "clsx";
import type { IFrameOrnamentProps } from "./frame-ornament";

/** A camera viewfinder: a recording dot and, on the stage, one soft frame corner. */
export function FrameVideo({ size }: IFrameOrnamentProps) {
	const tile = size === "tile";
	return (
		<div aria-hidden="true" className="absolute inset-0 -z-10">
			<span
				className={clsx(
					"absolute flex items-center justify-center rounded-full ring-1 ring-white/25",
					tile ? "top-2.5 right-2.5 h-3.5 w-3.5" : "top-5 right-5 h-5 w-5",
				)}
			>
				<span
					className={clsx(
						"rounded-full bg-rose-500",
						tile ? "h-1.5 w-1.5" : "h-2 w-2",
					)}
				/>
			</span>
			{size === "stage" ? (
				<span className="absolute right-5 bottom-5 h-6 w-6 rounded-br-lg border-r border-b border-white/25" />
			) : null}
		</div>
	);
}
