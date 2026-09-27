import { DocumentTextIcon } from "@heroicons/react/24/outline";
import type { IGuideAiFile } from "@/lib/guides/ai-files";

/** One AI-facing file. A plain anchor: Next would try to route the raw file. */
export function AiFileCard({ file }: { file: IGuideAiFile }) {
	return (
		<a
			href={file.path}
			target="_blank"
			rel="noopener noreferrer"
			className="group flex items-start gap-4 rounded-3xl bg-surface p-5 ring-1 ring-zinc-900/10 transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-zinc-900/5 motion-reduce:transition-none dark:bg-zinc-800/40 dark:ring-zinc-700/50 dark:hover:bg-zinc-800/70"
		>
			<span className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-accent-700/10 text-accent-700 dark:bg-accent-400/10 dark:text-accent-400">
				<DocumentTextIcon aria-hidden="true" className="h-6 w-6" />
			</span>
			<span className="min-w-0">
				<span className="block font-mono text-sm font-semibold text-zinc-800 transition-colors group-hover:text-accent-700 dark:text-zinc-100 dark:group-hover:text-accent-400">
					{file.path}
				</span>
				<span className="mt-1 block text-sm leading-6 text-zinc-600 dark:text-zinc-400">
					{file.description}
				</span>
			</span>
		</a>
	);
}
