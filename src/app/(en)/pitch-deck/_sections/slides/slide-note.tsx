import { ArrowsUpDownIcon } from "@heroicons/react/20/solid";
import type { IReorderRule } from "@/data/pitch-deck";

interface ISlideNoteProps {
	label: string;
	rule?: IReorderRule;
}

/** The reorder rule that applies to this slide. Renders nothing when none does. */
export function SlideNote({ label, rule }: ISlideNoteProps) {
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
					href="#order"
					className="font-semibold text-zinc-800 hover:underline dark:text-zinc-200"
				>
					{label}
				</a>
				: {rule.when} {rule.move}
			</span>
		</p>
	);
}
