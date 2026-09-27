import { Breadcrumb } from "@/components/breadcrumb/breadcrumb";
import { Container } from "@/components/container";
import { deckHero } from "@/data/pitch-deck";
import { breadcrumb } from "../../breadcrumb";
import { RuleChips } from "./rule-chips";

const ctaClassName =
	"inline-flex items-center justify-center gap-2 rounded-md bg-zinc-900/5 px-3 py-2 text-sm font-medium text-zinc-900 outline-offset-2 transition hover:bg-zinc-100 active:bg-zinc-100 active:text-zinc-900/60 active:transition-none dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50";

export function DeckHero() {
	return (
		<Container className="mt-8 md:mt-12 lg:mt-16">
			<Breadcrumb list={breadcrumb} />
			<div className="mt-8 max-w-2xl sm:mt-10">
				<p className="reveal-rise text-sm font-medium tracking-wide text-accent-700 uppercase dark:text-accent-400">
					{deckHero.eyebrow}
				</p>
				<h1 className="reveal-rise reveal-delay-1 mt-4 font-display text-4xl font-semibold tracking-tight text-zinc-800 sm:text-6xl dark:text-zinc-100">
					{deckHero.titleLead}{" "}
					<span className="italic text-accent-700 dark:text-accent-400">
						{deckHero.titleAccent}
					</span>
					.
				</h1>
				<p className="reveal-rise reveal-delay-2 mt-6 text-lg text-zinc-600 dark:text-zinc-400">
					{deckHero.thesis}
				</p>
			</div>
			<div className="reveal-up reveal-delay-3 mt-8 flex flex-col items-start gap-6">
				<RuleChips rules={deckHero.rules} />
				<a href={deckHero.ctaHref} className={ctaClassName}>
					{deckHero.ctaLabel}
				</a>
			</div>
		</Container>
	);
}
