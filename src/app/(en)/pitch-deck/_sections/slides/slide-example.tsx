interface ISlideExampleProps {
	label: string;
	text?: string;
}

/** A concrete line, set like a small dark slide. Renders nothing when absent. */
export function SlideExample({ label, text }: ISlideExampleProps) {
	if (!text) {
		return null;
	}
	return (
		<div className="mt-4 rounded-2xl bg-zinc-900 p-5 text-white ring-1 ring-zinc-900/10 dark:bg-zinc-800/80 dark:ring-white/10">
			<p className="text-xs font-medium tracking-wide text-accent-300 uppercase">
				{label}
			</p>
			<p className="mt-2 font-display text-lg font-semibold tracking-tight sm:text-xl">
				{text}
			</p>
		</div>
	);
}
