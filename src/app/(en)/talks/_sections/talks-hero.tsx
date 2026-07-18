import { StatBand } from "@/components/stat-band";
import { getTalk } from "@/data/talks/get-talk";

const aiCodingSummit = getTalk("ai-first-architecture");
const javascriptLondon = getTalk("compound-effect-guardrails");

const stats = [
	{
		value: aiCodingSummit.audience ?? "",
		label: "AI Coding Summit, online",
		href: aiCodingSummit.path,
	},
	{
		value: javascriptLondon.audience ?? "",
		label: "JavaScript London",
		href: javascriptLondon.path,
	},
];

export function TalksHero() {
	return (
		<div className="max-w-2xl">
			<p className="reveal-up text-sm font-medium tracking-wide text-accent-700 uppercase dark:text-accent-400">
				Talks & Speaking
			</p>
			<h1 className="mt-4 text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
				<span className="reveal-up reveal-delay-1 block">
					I've built two companies.
				</span>
				<span className="reveal-up reveal-delay-2 block">
					I lead AI-first teams.
				</span>
				<span className="reveal-up reveal-delay-3 block text-accent-700 dark:text-accent-400">
					I speak about both.
				</span>
			</h1>
			<p className="reveal-up reveal-delay-4 mt-6 text-base text-zinc-600 dark:text-zinc-400">
				At conferences and meetups, I cover founding and growing companies,
				software engineering, applied AI, and the leadership it takes to hold a
				team together.
			</p>
			<div className="reveal-up reveal-delay-4 mt-10 max-w-sm">
				<StatBand stats={stats} gridClass="grid-cols-2" />
			</div>
		</div>
	);
}
