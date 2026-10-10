interface IHubHowStepProps {
	number: string;
	title: string;
	text: string;
}

/** One move of the method: a numeral, a title, and the move in two sentences. */
export function HubHowStep({ number, title, text }: IHubHowStepProps) {
	return (
		<li className="flex gap-5 rounded-3xl bg-surface p-6 ring-1 ring-zinc-900/10 dark:bg-zinc-800/40 dark:ring-zinc-700/50">
			<span
				aria-hidden="true"
				className="font-display text-4xl font-semibold leading-none tabular-nums text-zinc-300 dark:text-zinc-600"
			>
				{number}
			</span>
			<span className="min-w-0">
				<span className="block text-lg font-semibold text-zinc-800 dark:text-zinc-100">
					{title}
				</span>
				<span className="mt-2 block text-sm leading-6 text-zinc-600 dark:text-zinc-400">
					{text}
				</span>
			</span>
		</li>
	);
}
