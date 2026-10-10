import { Breadcrumb } from "@/components/breadcrumb/breadcrumb";
import { Button } from "@/components/button";
import { Container } from "@/components/container";
import { ArtifactHero } from "@/components/guide/hero/artifact-hero";
import { RuleChips } from "@/components/guide/hero/rule-chips";
import { fundraisingKit } from "@/data/guides/fundraising-kit";
import { hubCopy } from "@/data/guides/hub-copy";
import { hubBreadcrumb } from "@/lib/guides/breadcrumb";

const { hero } = hubCopy;

// The six guides as the steps of one living artifact.
const kitSteps = fundraisingKit.map((entry) => ({
	id: entry.article.pagePath,
	title: entry.name,
	question: entry.short,
}));

/** The kit in one screen: what it is, the four rules it lives by, where to start. */
export function HubHero() {
	return (
		<Container className="mt-8 md:mt-12 lg:mt-16">
			<Breadcrumb list={hubBreadcrumb()} />
			<div className="mt-8 grid grid-cols-1 gap-y-12 sm:mt-10 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-center lg:gap-x-16">
				<div className="max-w-2xl">
					<p className="reveal-rise text-sm font-medium tracking-wide text-accent-700 uppercase dark:text-accent-400">
						{hero.eyebrow}
					</p>
					<h1 className="reveal-rise reveal-delay-1 mt-4 font-display text-4xl font-semibold tracking-tight text-balance text-zinc-800 sm:text-6xl lg:text-5xl xl:text-6xl dark:text-zinc-100">
						{hero.titleLead}{" "}
						<span className="italic text-accent-700 dark:text-accent-400">
							{hero.titleAccent}
						</span>
						.
					</h1>
					<p className="reveal-rise reveal-delay-2 mt-6 text-lg text-zinc-600 dark:text-zinc-400">
						{hero.thesis}
					</p>
					<div className="reveal-up reveal-delay-3 mt-8 flex flex-col items-start gap-6">
						<RuleChips rules={hero.rules} />
						<Button href={hero.ctaHref}>{hero.ctaLabel}</Button>
					</div>
				</div>
				<div className="reveal-up reveal-delay-2">
					<ArtifactHero
						frame="slide"
						steps={kitSteps}
						labels={hubCopy.artifactLabels}
					/>
				</div>
			</div>
		</Container>
	);
}
