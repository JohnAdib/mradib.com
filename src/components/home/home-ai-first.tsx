import Link from "next/link";
import { Container } from "@/components/container";

const practices = [
	{ figure: "3", caption: "AI reviewers guarding every pull request" },
	{ figure: "4×", caption: "faster releases, from monthly to weekly" },
	{ figure: "3 days", caption: "to ship an enterprise auth panel with AI" },
	{ figure: "90", caption: "design system components across 5 services" },
];

export function HomeAiFirst() {
	return (
		<Container className="mt-20 sm:mt-28">
			<div className="relative overflow-hidden rounded-3xl bg-zinc-900 px-8 py-12 sm:px-12 sm:py-14 dark:ring-1 dark:ring-zinc-700/60">
				<div
					aria-hidden="true"
					className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-accent-500/15 blur-3xl"
				/>
				<div
					aria-hidden="true"
					className="absolute -bottom-40 -left-24 h-80 w-80 rounded-full bg-accent-400/10 blur-3xl"
				/>
				<div className="relative">
					<p className="text-sm font-semibold tracking-wider text-accent-400 uppercase">
						AI-first, for real
					</p>
					<h2 className="mt-3 max-w-2xl text-2xl font-bold tracking-tight text-white sm:text-3xl">
						AI isn't a tool choice. It's how the team works.
					</h2>
					<p className="mt-4 max-w-2xl text-base text-zinc-300">
						I lead teams that build with AI in the loop, not bolted on:
						reviewers on every pull request, agents and skills woven through the
						workflow, and architecture designed so AI can work on it safely.
					</p>
					<div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
						{practices.map((practice) => (
							<div
								key={practice.caption}
								className="min-w-0 rounded-2xl bg-white/5 p-5 ring-1 ring-white/10"
							>
								<p className="text-3xl font-bold tracking-tight text-accent-400 tabular-nums">
									{practice.figure}
								</p>
								<p className="mt-2 text-sm leading-snug text-zinc-300">
									{practice.caption}
								</p>
							</div>
						))}
					</div>
					<Link
						href="/ai-first-architecture-why-single-responsibility-matters-more-than-ever"
						className="mt-8 inline-block text-sm font-medium text-accent-400 transition hover:text-accent-300"
					>
						The thesis: AI-First Architecture →
					</Link>
				</div>
			</div>
		</Container>
	);
}
