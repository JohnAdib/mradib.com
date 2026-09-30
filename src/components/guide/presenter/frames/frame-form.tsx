import clsx from "clsx";
import type { IFrameOrnamentProps } from "./frame-ornament";

/** An application form: two faint answer fields beside the numeral, waiting to be filled. */
export function FrameForm({ size }: IFrameOrnamentProps) {
	if (size === "banner") {
		return null;
	}
	const tile = size === "tile";
	const label = clsx(
		"rounded-full bg-white/15",
		tile ? "mb-1 h-1" : "mb-1.5 h-1.5",
	);
	const field = clsx(
		"ring-1 ring-white/15",
		tile ? "h-3.5 rounded" : "h-6 rounded-md",
	);
	return (
		<div
			aria-hidden="true"
			className={clsx(
				"absolute -z-10",
				tile
					? "top-3 right-3 left-12 space-y-2"
					: "top-6 right-6 left-24 space-y-3",
			)}
		>
			<div>
				<div className={clsx(label, tile ? "w-8" : "w-16")} />
				<div className={field} />
			</div>
			<div>
				<div className={clsx(label, tile ? "w-12" : "w-24")} />
				<div className={field} />
			</div>
		</div>
	);
}
