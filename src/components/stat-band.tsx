import Link from "next/link";

export interface IStat {
	value: string;
	label: string;
	href?: string;
}

function StatContent({ stat }: { stat: IStat }) {
	return (
		<>
			<dd className="text-3xl font-bold tracking-tight text-zinc-800 sm:text-4xl dark:text-zinc-100">
				{stat.value}
			</dd>
			<dt className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
				{stat.label}
			</dt>
		</>
	);
}

export function StatBand({ stats }: { stats: IStat[] }) {
	return (
		<dl className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-5">
			{stats.map((stat) =>
				stat.href ? (
					<Link
						key={stat.label}
						href={stat.href}
						className="group flex flex-col-reverse rounded-xl transition hover:-translate-y-0.5"
					>
						<StatContent stat={stat} />
					</Link>
				) : (
					<div key={stat.label} className="flex flex-col-reverse">
						<StatContent stat={stat} />
					</div>
				),
			)}
		</dl>
	);
}
