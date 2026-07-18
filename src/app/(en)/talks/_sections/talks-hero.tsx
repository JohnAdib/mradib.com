import Link from "next/link";
import { StatBand } from "@/components/stat-band";
import { getTalk } from "@/data/talks/get-talk";

const aiCodingSummit = getTalk("ai-first-architecture");
const javascriptLondon = getTalk("compound-effect-guardrails");
const cloudflare = getTalk("turning-chaos-into-control-with-cloudflare");
const figma = getTalk("design-systems-ai-separation-of-concern");

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

const hostedAt = [
	{ name: cloudflare.host ?? "", href: cloudflare.path },
	{ name: figma.host ?? "", href: figma.path },
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
			<div className="reveal-up reveal-delay-4 mt-8">
				<p className="text-xs font-medium tracking-wide text-zinc-400 uppercase dark:text-zinc-500">
					Also on stage at
				</p>
				<div className="mt-2 flex flex-wrap gap-3">
					{hostedAt.map((host) => (
						<Link
							key={host.name}
							href={host.href ?? "/talks"}
							className="rounded-full border border-zinc-200 px-4 py-1.5 text-sm font-semibold text-zinc-700 transition hover:border-accent-300 hover:text-accent-700 dark:border-zinc-700 dark:text-zinc-300 dark:hover:border-accent-500 dark:hover:text-accent-400"
						>
							{host.name}
						</Link>
					))}
				</div>
			</div>
		</div>
	);
}
