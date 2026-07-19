export function FactRow({ label, value }: { label: string; value?: string }) {
	if (!value) {
		return null;
	}
	return (
		<div className="flex flex-col gap-0.5 sm:flex-row sm:gap-4">
			<dt className="w-24 flex-none text-xs font-medium tracking-wide text-zinc-600 uppercase dark:text-zinc-400">
				{label}
			</dt>
			<dd className="text-sm text-zinc-700 dark:text-zinc-300">{value}</dd>
		</div>
	);
}
