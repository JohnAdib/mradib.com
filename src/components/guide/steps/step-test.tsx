import { ClipboardDocumentCheckIcon } from "@heroicons/react/24/outline";

/** The one-sentence check a finished step must pass, set as a dark strip. */
export function StepTest({ label, text }: { label: string; text: string }) {
	return (
		<div className="mt-4 flex gap-3 rounded-2xl bg-zinc-900 p-4 text-sm leading-6 text-zinc-200 ring-1 ring-zinc-900/10 dark:bg-zinc-800/80 dark:ring-white/10">
			<ClipboardDocumentCheckIcon
				aria-hidden="true"
				className="mt-0.5 h-5 w-5 flex-none text-accent-400"
			/>
			<p>
				<span className="font-semibold text-accent-300">{label}: </span>
				{text}
			</p>
		</div>
	);
}
