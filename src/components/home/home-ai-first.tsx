import Link from "next/link";
import { Container } from "@/components/container";

const practices = [
	"3 AI reviewers guarding every pull request",
	"App releases accelerated from monthly to weekly — 4× faster",
	"An enterprise auth panel with passkeys and RBAC, shipped in 3 days with AI",
	"A 90-component design system serving 5 production services",
];

export function HomeAiFirst() {
	return (
		<Container className="mt-20 sm:mt-28">
			<div className="rounded-3xl bg-zinc-900 px-8 py-12 sm:px-12 dark:bg-zinc-800/60 dark:ring-1 dark:ring-zinc-700/60">
				<p className="text-sm font-semibold uppercase tracking-wider text-teal-400">
					AI-first, for real
				</p>
				<h2 className="mt-3 max-w-2xl text-2xl font-bold tracking-tight text-white sm:text-3xl">
					AI isn't a tool choice — it's how the team works.
				</h2>
				<p className="mt-4 max-w-2xl text-base text-zinc-300">
					At Zapp I lead teams that build with AI in the loop, not bolted on:
					reviewers on every pull request, agents and skills woven through the
					workflow, and architecture designed so AI can work on it safely.
				</p>
				<ul className="mt-8 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-2">
					{practices.map((practice) => (
						<li key={practice} className="flex gap-3 text-sm text-zinc-200">
							<span
								aria-hidden="true"
								className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-teal-400"
							/>
							{practice}
						</li>
					))}
				</ul>
				<Link
					href="/ai-first-architecture-why-single-responsibility-matters-more-than-ever"
					className="mt-8 inline-block text-sm font-medium text-teal-400 transition hover:text-teal-300"
				>
					The thesis: AI-First Architecture →
				</Link>
			</div>
		</Container>
	);
}
