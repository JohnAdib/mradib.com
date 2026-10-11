import Link from "next/link";
import { techlead2026Panels } from "@/data/talks/techlead-2026-panels";
import { techlead2026Panelists } from "@/data/talks/techlead-2026-talk";

export function Techlead2026Panels() {
	return (
		<section aria-labelledby="conference-panels" className="mt-10">
			<h2
				id="conference-panels"
				className="text-2xl font-semibold tracking-tight text-zinc-800 dark:text-zinc-100"
			>
				Three panels. Three perspectives on AI.
			</h2>
			<div className="mt-6 space-y-5">
				{techlead2026Panels.map((panel) => (
					<article
						key={panel.slug}
						className="rounded-2xl bg-surface p-5 ring-1 ring-zinc-900/10 dark:bg-zinc-800/40 dark:ring-white/10"
					>
						<p className="text-xs font-medium text-accent-700 dark:text-accent-400">
							{panel.role === "moderator-panelist"
								? "Moderator and panelist"
								: "Panelist"}
						</p>
						<h3 className="mt-2 text-lg font-semibold leading-7 text-zinc-800 dark:text-zinc-100">
							{panel.title}
						</h3>
						<p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
							{panel.summary}
						</p>
						<p className="mt-3 text-xs leading-5 text-zinc-500 dark:text-zinc-400">
							Alongside {techlead2026Panelists[panel.slug].join(", ")}.
						</p>
					</article>
				))}
			</div>
			<p className="mt-5 text-sm leading-6 text-zinc-500 dark:text-zinc-400">
				Scheduled for 23 October 2026. Panel details follow the official
				programme.
			</p>
			<Link
				href="/adopting-ai-in-orgs-techlead-conf-london-2025"
				className="mt-6 inline-block text-sm font-medium text-accent-700 underline-offset-4 hover:underline dark:text-accent-400"
			>
				My panel at TechLead Conf 2025
			</Link>
		</section>
	);
}
