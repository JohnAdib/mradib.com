import clsx from "clsx";
import Link from "next/link";
import { Card } from "@/components/card";
import { aiEvidence } from "@/data/ai-evidence";
import { formatDate } from "@/lib/datetime/format-date";

export function AiEvidenceLinks({ inverse = false }: { inverse?: boolean }) {
	return (
		<div className="mt-8">
			<p
				className={clsx(
					"text-xs font-semibold tracking-wider uppercase",
					inverse ? "text-accent-400" : "text-accent-700 dark:text-accent-400",
				)}
			>
				Published work
			</p>
			<ul className="mt-3 grid gap-3 lg:grid-cols-3">
				{aiEvidence.map((evidence) => (
					<Card
						as="li"
						key={evidence.path}
						className={clsx(
							"rounded-2xl ring-1 transition hover:-translate-y-0.5 motion-reduce:transform-none",
							inverse
								? "bg-white/5 ring-white/10 hover:bg-white/10"
								: "bg-white/60 ring-zinc-900/10 hover:bg-white dark:bg-zinc-800/40 dark:ring-zinc-700/50 dark:hover:bg-zinc-800/70",
						)}
					>
						<Link
							href={evidence.path}
							className="block h-full w-full rounded-2xl p-5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-500"
						>
							<span
								className={clsx(
									"block text-xs leading-5",
									inverse
										? "text-zinc-400"
										: "text-zinc-500 dark:text-zinc-400",
								)}
							>
								{evidence.kind}
								<time dateTime={evidence.date} className="mt-1 block">
									{formatDate({ date: evidence.date })}
								</time>
							</span>
							<span
								className={clsx(
									"mt-3 block text-base leading-6 font-semibold",
									inverse ? "text-white" : "text-zinc-800 dark:text-zinc-100",
								)}
							>
								{evidence.title}
							</span>
							<span
								className={clsx(
									"mt-2 block text-sm leading-6",
									inverse
										? "text-zinc-300"
										: "text-zinc-600 dark:text-zinc-400",
								)}
							>
								{evidence.summary}
							</span>
						</Link>
					</Card>
				))}
			</ul>
		</div>
	);
}
