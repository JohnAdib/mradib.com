import Link from "next/link";
import type { ComponentType } from "react";

export interface IHighlight {
	icon: ComponentType<{ className?: string }>;
	eyebrow: string;
	title: string;
	href: string;
	description: string;
	cta: string;
	external?: boolean;
}

export function HighlightCard({ highlight }: { highlight: IHighlight }) {
	const Icon = highlight.icon;

	return (
		<Link
			href={highlight.href}
			target={highlight.external ? "_blank" : undefined}
			rel={highlight.external ? "noopener noreferrer" : undefined}
			className="group flex min-w-0 flex-col rounded-3xl bg-white p-7 ring-1 ring-zinc-100 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-zinc-900/5 dark:bg-zinc-800/40 dark:ring-zinc-700/50 dark:hover:bg-zinc-800/70"
		>
			<span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-50 ring-1 ring-accent-100 dark:bg-accent-400/10 dark:ring-accent-400/20">
				<Icon className="h-5 w-5 text-accent-700 dark:text-accent-400" />
			</span>
			<p className="mt-5 text-xs font-medium tracking-wide text-zinc-500 uppercase dark:text-zinc-400">
				{highlight.eyebrow}
			</p>
			<h3 className="mt-2 text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
				{highlight.title}
			</h3>
			<p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
				{highlight.description}
			</p>
			<p className="mt-5 text-sm font-medium text-accent-700 transition group-hover:text-accent-600 dark:text-accent-400">
				{highlight.cta} →
			</p>
		</Link>
	);
}
