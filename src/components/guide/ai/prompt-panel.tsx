import { CopyButton } from "@/components/copy-button";

interface IPromptPanelProps {
	prompt: string;
	copyLabel: string;
	copiedLabel: string;
}

/** The copy-ready prompt in its own panel, with the site's copy button. */
export function PromptPanel({
	prompt,
	copyLabel,
	copiedLabel,
}: IPromptPanelProps) {
	return (
		<div className="mt-4 max-w-2xl rounded-2xl bg-surface p-5 ring-1 ring-zinc-900/10 dark:bg-zinc-800/40 dark:ring-zinc-700/50">
			<p className="text-sm leading-7 whitespace-pre-wrap text-zinc-700 dark:text-zinc-300">
				{prompt}
			</p>
			<div className="mt-4">
				<CopyButton text={prompt} label={copyLabel} copiedLabel={copiedLabel} />
			</div>
		</div>
	);
}
