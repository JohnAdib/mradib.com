import { CopyButton } from "@/components/copy-button";

interface IPromptPanelProps {
	prompt: string;
	copyLabel: string;
	copiedLabel: string;
}

/** The copy-ready prompt on a dark glow panel, with the site's copy button. */
export function PromptPanel({
	prompt,
	copyLabel,
	copiedLabel,
}: IPromptPanelProps) {
	return (
		<div className="relative mt-4 max-w-3xl overflow-hidden rounded-3xl bg-zinc-900 p-6 text-white ring-1 ring-zinc-900/10 sm:p-8 dark:bg-zinc-800/80 dark:ring-white/10">
			<div
				aria-hidden="true"
				className="absolute -top-24 -right-20 h-64 w-64 rounded-full bg-accent-500/15 blur-3xl"
			/>
			<div
				aria-hidden="true"
				className="absolute -bottom-28 -left-16 h-56 w-56 rounded-full bg-accent-400/10 blur-3xl"
			/>
			<div className="relative">
				<p className="text-base leading-7 whitespace-pre-wrap text-zinc-200">
					{prompt}
				</p>
				<div className="mt-6 [&_button]:bg-white/10 [&_button]:text-white [&_button:hover]:bg-white/20 [&_button:hover]:text-white">
					<CopyButton
						text={prompt}
						label={copyLabel}
						copiedLabel={copiedLabel}
					/>
				</div>
			</div>
		</div>
	);
}
