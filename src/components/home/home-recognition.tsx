import Link from "next/link";
import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal/reveal";
import {
	recommendationQuotes,
	recommendationsUrl,
} from "@/data/recommendations";

export function HomeRecognition() {
	return (
		<Container className="mt-20 sm:mt-28">
			<Reveal>
				<p className="text-sm font-semibold tracking-wider text-accent-700 uppercase dark:text-accent-400">
					Recognition
				</p>
				<h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold tracking-tight text-zinc-800 sm:text-4xl dark:text-zinc-100">
					Endorsed by the UK. Named by ADPList.
				</h2>
			</Reveal>
			<Reveal delay={100}>
				<p className="mt-6 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
					In 2024 the UK government endorsed me as exceptional talent in
					technology. ADPList named me The World's Most Influential Mentor,
					selected from 32,000+ mentors across 140+ countries.
				</p>
			</Reveal>
			<Reveal delay={200}>
				<div className="mt-10 flex max-w-3xl flex-wrap gap-3">
					{recommendationQuotes.map((entry) => (
						<span
							key={entry.quote}
							className="rounded-full bg-zinc-100/70 px-4 py-1.5 font-display text-base text-zinc-700 italic ring-1 ring-zinc-900/10 dark:bg-zinc-800/40 dark:text-zinc-300 dark:ring-zinc-700/50"
						>
							&ldquo;{entry.quote}&rdquo;
						</span>
					))}
				</div>
				<p className="mt-4 max-w-2xl text-sm text-zinc-500 dark:text-zinc-400">
					From engineers, leads, and founders I worked with.{" "}
					<a
						href={recommendationsUrl}
						target="_blank"
						rel="noreferrer"
						className="font-medium text-accent-700 transition hover:text-accent-600 dark:text-accent-400"
					>
						All recommendations on LinkedIn →
					</a>
				</p>
			</Reveal>
			<Reveal delay={300}>
				<Link
					href="/awards"
					className="mt-8 inline-block text-sm font-medium text-accent-700 transition hover:text-accent-600 dark:text-accent-400"
				>
					All awards →
				</Link>
			</Reveal>
		</Container>
	);
}
