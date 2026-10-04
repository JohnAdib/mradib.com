import { errorWindowSummary } from "@/data/ai-adoption/metrics";

export function ErrorWindowSummary() {
	return (
		<dl className="mt-7 space-y-5 border-t border-zinc-200 pt-5 dark:border-zinc-700">
			{errorWindowSummary.map((window) => (
				<div key={window.from}>
					<dt className="text-xs leading-5 text-zinc-600 dark:text-zinc-400">
						{window.label}, 2026
						<span className="block">{window.note}</span>
					</dt>
					<dd className="mt-1 text-2xl font-bold tracking-tight text-zinc-900 tabular-nums dark:text-zinc-100">
						{window.value.toLocaleString("en-GB")}
						<span className="sr-only"> recorded events</span>
					</dd>
				</div>
			))}
		</dl>
	);
}
