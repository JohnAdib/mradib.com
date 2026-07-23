import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/outline";
import { Container } from "@/components/container";
import {
	auditFit,
	auditFitHeading,
	auditNotFit,
	type IAuditFitList,
} from "@/data/audit";

function FitCard({
	list,
	positive,
}: {
	list: IAuditFitList;
	positive: boolean;
}) {
	const Icon = positive ? CheckCircleIcon : XCircleIcon;
	const iconColour = positive
		? "text-accent-700 dark:text-accent-400"
		: "text-zinc-400 dark:text-zinc-500";
	return (
		<div className="rounded-3xl bg-surface p-7 ring-1 ring-zinc-900/10 dark:bg-zinc-800/40 dark:ring-zinc-700/50">
			<h3 className="text-lg font-semibold text-zinc-800 dark:text-zinc-100">
				{list.title}
			</h3>
			<ul className="mt-4 space-y-3">
				{list.items.map((item) => (
					<li
						key={item}
						className="flex gap-3 text-base text-zinc-600 dark:text-zinc-400"
					>
						<Icon
							aria-hidden="true"
							className={`h-6 w-6 flex-none ${iconColour}`}
						/>
						{item}
					</li>
				))}
			</ul>
		</div>
	);
}

export function AuditFit() {
	return (
		<Container className="mt-16 sm:mt-24">
			<p className="text-sm font-semibold tracking-wider text-accent-700 uppercase dark:text-accent-400">
				{auditFitHeading.eyebrow}
			</p>
			<h2 className="mt-3 max-w-2xl font-display text-2xl font-semibold tracking-tight text-zinc-800 sm:text-3xl dark:text-zinc-100">
				{auditFitHeading.title}
			</h2>
			<div className="mt-10 grid gap-6 sm:grid-cols-2">
				<FitCard list={auditFit} positive />
				<FitCard list={auditNotFit} positive={false} />
			</div>
		</Container>
	);
}
