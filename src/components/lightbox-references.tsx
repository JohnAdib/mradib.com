import type { IReference } from "@/data/awards";

export function LightboxReferences({
	references,
}: {
	references: IReference[];
}) {
	if (references.length === 0) {
		return null;
	}

	return (
		<div className="flex flex-wrap justify-center gap-3">
			{references.map((ref) => (
				<a
					key={ref.url}
					href={ref.url}
					target="_blank"
					rel="noopener noreferrer"
					className="rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/20"
				>
					{ref.label} ↗
				</a>
			))}
		</div>
	);
}
