import clsx from "clsx";
import type { IFrameOrnamentProps } from "./frame-ornament";

/** A printed page: an inner margin and, where there is room, faint lines of text. */
export function FramePage({ size }: IFrameOrnamentProps) {
	const tile = size === "tile";
	return (
		<div
			aria-hidden="true"
			className={clsx(
				"absolute -z-10 ring-1 ring-white/10",
				tile ? "inset-2 rounded-xl" : "inset-3 rounded-2xl",
			)}
		>
			{size === "banner" ? null : (
				<div
					className={clsx(
						"absolute",
						tile
							? "top-3 right-3 left-12 space-y-1.5"
							: "top-6 right-6 left-24 space-y-2.5",
					)}
				>
					<div
						className={clsx(
							"w-full rounded-full bg-white/10",
							tile ? "h-1" : "h-1.5",
						)}
					/>
					<div
						className={clsx(
							"w-5/6 rounded-full bg-white/10",
							tile ? "h-1" : "h-1.5",
						)}
					/>
					<div
						className={clsx(
							"w-2/3 rounded-full bg-white/10",
							tile ? "h-1" : "h-1.5",
						)}
					/>
				</div>
			)}
		</div>
	);
}
