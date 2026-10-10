import clsx from "clsx";
import type { IGuide } from "@/data/guides/guide-bundle";
import { rulesColumns } from "@/lib/guides/grid-columns";
import { GuideSectionHeading } from "../shell/section-heading";
import { SectionShell } from "../shell/section-shell";
import { OptionalChip } from "./optional-chip";
import { RuleCard } from "./rule-card";

/** The cases that bend the default, then the extras that earn a place. */
export function GuideRules({ guide }: { guide: IGuide }) {
	const id = guide.anchors.rules;
	return (
		<SectionShell id={id}>
			<GuideSectionHeading id={id} heading={guide.headings.rules} />
			<div
				className={clsx("mt-10 grid gap-4", rulesColumns(guide.rules.length))}
			>
				{guide.rules.map((rule) => (
					<RuleCard key={rule.title} rule={rule} labels={guide.stepLabels} />
				))}
			</div>
			<h3 className="mt-12 text-xs font-semibold tracking-wider text-zinc-600 uppercase dark:text-zinc-400">
				{guide.optionalTitle}
			</h3>
			<ul className="mt-4 grid list-none gap-3 sm:grid-cols-2 lg:grid-cols-3">
				{guide.optional.map((item) => (
					<OptionalChip key={item.title} item={item} />
				))}
			</ul>
		</SectionShell>
	);
}
