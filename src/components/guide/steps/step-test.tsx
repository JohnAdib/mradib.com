import { ClipboardDocumentCheckIcon } from "@heroicons/react/24/outline";

/** The one-sentence check a finished step must pass. */
export function StepTest({ label, text }: { label: string; text: string }) {
	return (
		<div className="mt-4 flex gap-3 rounded-2xl bg-accent-50 p-4 text-sm leading-6 text-accent-950 ring-1 ring-accent-100 dark:bg-accent-400/10 dark:text-accent-100 dark:ring-accent-400/20">
			<ClipboardDocumentCheckIcon
				aria-hidden="true"
				className="mt-0.5 h-5 w-5 flex-none text-accent-700 dark:text-accent-400"
			/>
			<p>
				<span className="font-semibold">{label}: </span>
				{text}
			</p>
		</div>
	);
}
