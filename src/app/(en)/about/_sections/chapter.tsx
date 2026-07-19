import type { ReactNode } from "react";
import { Reveal } from "@/components/reveal/reveal";

/**
 * One chapter of the about story. Renders a node on the shared timeline spine
 * (the left border, continuous because chapters stack with no gap) plus a
 * numbered eyebrow, an era label, a heading, and the prose body. The index
 * number is a permalink to `#slug`, and `scroll-mt` keeps the sticky header
 * from covering the heading when a hash link is opened directly.
 */
export function Chapter({
	index,
	era,
	title,
	slug,
	children,
}: {
	index: string;
	era: string;
	title: string;
	slug: string;
	children: ReactNode;
}) {
	return (
		<section
			id={slug}
			className="relative scroll-mt-24 border-l border-zinc-200 pb-16 pl-8 last:pb-0 sm:pl-12 dark:border-zinc-800/80"
		>
			<span
				aria-hidden="true"
				className="absolute top-1.5 -left-[7px] h-3.5 w-3.5 rounded-full border-2 border-accent-500 bg-paper dark:bg-black"
			/>
			<Reveal>
				<div className="flex items-baseline gap-3">
					<a
						href={`#${slug}`}
						className="font-mono text-xs font-semibold tracking-widest text-accent-600 hover:underline dark:text-accent-400"
					>
						{index}
					</a>
					<span className="text-xs font-medium tracking-wide text-zinc-600 uppercase dark:text-zinc-400">
						{era}
					</span>
				</div>
				<h2 className="mt-3 text-2xl font-bold tracking-tight text-balance text-zinc-800 sm:text-3xl dark:text-zinc-100">
					{title}
				</h2>
				<div className="mt-5 space-y-5 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
					{children}
				</div>
			</Reveal>
		</section>
	);
}

export const chapterLinkClass =
	"font-medium text-accent-700 transition hover:text-accent-600 dark:text-accent-400";
