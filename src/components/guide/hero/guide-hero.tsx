import { Breadcrumb } from "@/components/breadcrumb/breadcrumb";
import { Button } from "@/components/button";
import { Container } from "@/components/container";
import type { IGuide } from "@/data/guides/guide-bundle";
import { guideBreadcrumb } from "@/lib/guides/breadcrumb";
import { RuleChips } from "./rule-chips";

/** Breadcrumb, eyebrow, the H1 with its italic accent, thesis, chips, one CTA. */
export function GuideHero({ guide }: { guide: IGuide }) {
	const { hero } = guide;
	return (
		<Container className="mt-8 md:mt-12 lg:mt-16">
			<Breadcrumb list={guideBreadcrumb(guide)} />
			<div className="mt-8 max-w-2xl sm:mt-10">
				<p className="reveal-rise text-sm font-medium tracking-wide text-accent-700 uppercase dark:text-accent-400">
					{hero.eyebrow}
				</p>
				<h1 className="reveal-rise reveal-delay-1 mt-4 font-display text-4xl font-semibold tracking-tight text-zinc-800 sm:text-6xl dark:text-zinc-100">
					{hero.titleLead}{" "}
					<span className="italic text-accent-700 dark:text-accent-400">
						{hero.titleAccent}
					</span>
					.
				</h1>
				<p className="reveal-rise reveal-delay-2 mt-6 text-lg text-zinc-600 dark:text-zinc-400">
					{hero.thesis}
				</p>
			</div>
			<div className="reveal-up reveal-delay-3 mt-8 flex flex-col items-start gap-6">
				<RuleChips rules={hero.rules} />
				<Button href={`#${guide.anchors[hero.ctaAnchor]}`} variant="secondary">
					{hero.ctaLabel}
				</Button>
			</div>
		</Container>
	);
}
