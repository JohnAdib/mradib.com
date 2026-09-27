import { DocumentTextIcon } from "@heroicons/react/20/solid";
import type { IKitEntry } from "@/data/guides/fundraising-kit";

interface IHubAiRowProps {
	entry: IKitEntry;
	labels: { frameworkLabel: string; skillLabel: string };
}

const linkClassName =
	"inline-flex items-center gap-1 text-sm font-medium text-accent-700 hover:underline dark:text-accent-400";

/** One guide's two AI files. Plain anchors: Next would try to route the raw files. */
export function HubAiRow({ entry, labels }: IHubAiRowProps) {
	const path = entry.article.pagePath;
	return (
		<li className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2 rounded-2xl bg-surface px-4 py-3 ring-1 ring-zinc-900/10 dark:bg-zinc-800/40 dark:ring-zinc-700/50">
			<span className="text-sm font-semibold text-zinc-800 dark:text-zinc-100">
				{entry.name}
			</span>
			<span className="flex items-center gap-5">
				<a
					href={`${path}/llms.txt`}
					target="_blank"
					rel="noopener noreferrer"
					className={linkClassName}
				>
					<DocumentTextIcon aria-hidden="true" className="h-4 w-4" />
					{labels.frameworkLabel}
				</a>
				<a
					href={`${path}/skill.md`}
					target="_blank"
					rel="noopener noreferrer"
					className={linkClassName}
				>
					<DocumentTextIcon aria-hidden="true" className="h-4 w-4" />
					{labels.skillLabel}
				</a>
			</span>
		</li>
	);
}
