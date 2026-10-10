import { ArrowsUpDownIcon } from "@heroicons/react/20/solid";
import type { IGuideRule } from "@/data/guides/guide-interface";

interface IStepNoteProps {
	label: string;
	rule?: IGuideRule;
	/** The rules section, so the label links to the full list. */
	href: string;
}

/** The rule that bends this step. Renders nothing when none does. */
export function StepNote({ label, rule, href }: IStepNoteProps) {
	if (!rule) {
		return null;
	}
	return (
		<p className="mt-4 flex gap-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
			<ArrowsUpDownIcon
				aria-hidden="true"
				className="mt-1 h-4 w-4 flex-none text-zinc-500 dark:text-zinc-400"
			/>
			<span>
				<a
					href={href}
					className="font-semibold text-zinc-800 hover:underline dark:text-zinc-200"
				>
					{label}
				</a>
				: {rule.when} {rule.action}
			</span>
		</p>
	);
}
