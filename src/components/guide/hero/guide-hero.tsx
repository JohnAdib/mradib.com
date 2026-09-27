import { Breadcrumb } from "@/components/breadcrumb/breadcrumb";
import { Button } from "@/components/button";
import { Container } from "@/components/container";
import type { IGuide } from "@/data/guides/guide-bundle";
import { kitCopy } from "@/data/guides/kit-copy";
import { guideBreadcrumb } from "@/lib/guides/breadcrumb";
import { kitPosition } from "@/lib/guides/kit";
import { KitPosition } from "./kit-position";
import { RuleChips } from "./rule-chips";

/** Breadcrumb, eyebrow and kit position, the H1 with its italic accent, thesis, chips, one CTA. */
export function GuideHero({ guide }: { guide: IGuide }) {
	const { hero, anchors } = guide;
	const kit = kitPosition(guide);
	return (
		<Container className="mt-8 md:mt-12 lg:mt-16">
			<Breadcrumb list={guideBreadcrumb(guide)} />
			<div className="mt-8 max-w-2xl sm:mt-10">
				<div className="flex flex-wrap items-center gap-x-4 gap-y-1">
					<p className="reveal-rise text-sm font-medium tracking-wide text-accent-700 uppercase dark:text-accent-400">
						{hero.eyebrow}
					</p>
					{kit.index >= 0 ? (
						<KitPosition
							href={`#${anchors.kit}`}
							label={`${kitCopy.name}, ${kitCopy.guide} ${kit.index + 1} ${kitCopy.of} ${kit.total}`}
						/>
					) : null}
				</div>
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
				<Button href={`#${anchors[hero.ctaAnchor]}`} variant="secondary">
					{hero.ctaLabel}
				</Button>
			</div>
		</Container>
	);
}
