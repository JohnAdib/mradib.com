import type {
	IGuideRule,
	IGuideStepLabels,
} from "@/data/guides/guide-interface";
import { RuleIcon } from "./rule-icon";

interface IRuleCardProps {
	rule: IGuideRule;
	labels: Pick<IGuideStepLabels, "when" | "action">;
}

/** One rule: when it applies, and what changes. The title links to its step. */
export function RuleCard({ rule, labels }: IRuleCardProps) {
	return (
		<div className="rounded-3xl bg-surface p-6 ring-1 ring-zinc-900/10 dark:bg-zinc-800/40 dark:ring-zinc-700/50">
			<span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent-700/10 text-accent-700 dark:bg-accent-400/10 dark:text-accent-400">
				<RuleIcon icon={rule.icon} className="h-6 w-6" />
			</span>
			<h3 className="mt-5 text-lg font-semibold text-zinc-800 dark:text-zinc-100">
				{rule.stepId ? (
					<a href={`#${rule.stepId}`} className="hover:underline">
						{rule.title}
					</a>
				) : (
					rule.title
				)}
			</h3>
			<p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
				<span className="font-semibold text-zinc-800 dark:text-zinc-200">
					{labels.when}:{" "}
				</span>
				{rule.when}
			</p>
			<p className="mt-1 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
				<span className="font-semibold text-zinc-800 dark:text-zinc-200">
					{labels.action}:{" "}
				</span>
				{rule.action}
			</p>
		</div>
	);
}
