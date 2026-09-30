import type { CSSProperties } from "react";

/** One dot per step under the living artifact; the lit one follows the cycle. */
export function ArtifactDots({ count }: { count: number }) {
	return (
		<div className="mt-4 flex justify-center gap-1.5">
			{Array.from({ length: count }, (_, index) => (
				<span
					// biome-ignore lint/suspicious/noArrayIndexKey: the dots are positional by nature
					key={index}
					className="artifact-cycle relative h-1.5 w-4 overflow-hidden rounded-full bg-zinc-900/10 dark:bg-white/15"
					data-cycle={count}
					style={{ "--artifact-count": count } as CSSProperties}
				>
					<span
						className="artifact-step rounded-full bg-accent-600 dark:bg-accent-400"
						style={{ "--artifact-index": index } as CSSProperties}
					/>
				</span>
			))}
		</div>
	);
}
