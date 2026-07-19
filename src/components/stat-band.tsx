import Link from "next/link";

export interface IStat {
	value: string;
	label: string;
	href?: string;
}

function StatContent({ stat }: { stat: IStat }) {
	return (
		<>
			<p className="text-3xl font-bold tracking-tight text-zinc-800 tabular-nums sm:text-4xl dark:text-zinc-100">
				{stat.value}
			</p>
			<p className="mt-1.5 text-xs font-medium tracking-wide text-zinc-600 uppercase dark:text-zinc-400">
				{stat.label}
			</p>
		</>
	);
}

export function StatBand({
	stats,
	gridClass = "grid-cols-2 sm:grid-cols-4",
}: {
	stats: IStat[];
	gridClass?: string;
}) {
	return (
		<div className={`grid gap-x-6 gap-y-10 ${gridClass}`}>
			{stats.map((stat, index) => {
				const style = { animationDelay: `${0.35 + index * 0.1}s` };
				return stat.href ? (
					<Link
						key={stat.label}
						href={stat.href}
						style={style}
						className="reveal-up min-w-0 rounded-xl transition hover:-translate-y-0.5"
					>
						<StatContent stat={stat} />
					</Link>
				) : (
					<div key={stat.label} style={style} className="reveal-up min-w-0">
						<StatContent stat={stat} />
					</div>
				);
			})}
		</div>
	);
}
