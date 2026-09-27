interface IStepTagsProps {
	label: string;
	tags?: string[];
}

/** Who asks this question, as small chips. Renders nothing without tags. */
export function StepTags({ label, tags }: IStepTagsProps) {
	if (!tags?.length) {
		return null;
	}
	return (
		<div className="mt-3 flex flex-wrap items-center gap-2">
			<span className="text-xs font-semibold tracking-wider text-zinc-600 uppercase dark:text-zinc-400">
				{label}
			</span>
			<ul className="flex flex-wrap gap-2">
				{tags.map((tag) => (
					<li
						key={tag}
						className="rounded-full bg-zinc-900/5 px-2.5 py-0.5 text-xs font-medium text-zinc-700 ring-1 ring-zinc-900/10 dark:bg-white/5 dark:text-zinc-300 dark:ring-white/10"
					>
						{tag}
					</li>
				))}
			</ul>
		</div>
	);
}
