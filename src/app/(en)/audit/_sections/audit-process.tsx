import { ClockIcon, LockClosedIcon } from "@heroicons/react/24/outline";
import type { ComponentType } from "react";
import { Container } from "@/components/container";
import {
	auditFacts,
	auditProcessHeading,
	auditWeeks,
	type IAuditFact,
} from "@/data/audit";
import { AuditProcessWeek } from "./audit-process-week";

type IconType = ComponentType<{ className?: string; "aria-hidden"?: boolean }>;

const iconBySlug: Record<IAuditFact["slug"], IconType> = {
	time: ClockIcon as IconType,
	repo: LockClosedIcon as IconType,
};

export function AuditProcess() {
	return (
		<Container className="mt-16 sm:mt-24">
			<p className="text-sm font-semibold tracking-wider text-accent-700 uppercase dark:text-accent-400">
				{auditProcessHeading.eyebrow}
			</p>
			<h2 className="mt-3 max-w-2xl font-display text-2xl font-semibold tracking-tight text-zinc-800 sm:text-3xl dark:text-zinc-100">
				{auditProcessHeading.title}
			</h2>
			<div className="mt-10 grid gap-12 lg:grid-cols-2">
				{auditWeeks.map((week) => (
					<AuditProcessWeek key={week.label} week={week} />
				))}
			</div>
			<div className="mt-12 grid gap-6 sm:grid-cols-2">
				{auditFacts.map((fact) => {
					const Icon = iconBySlug[fact.slug];
					return (
						<div
							key={fact.slug}
							className="rounded-3xl bg-surface p-6 ring-1 ring-zinc-900/10 dark:bg-zinc-800/40 dark:ring-zinc-700/50"
						>
							<span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent-700/10 text-accent-700 dark:bg-accent-400/10 dark:text-accent-400">
								<Icon aria-hidden={true} className="h-6 w-6" />
							</span>
							<h3 className="mt-5 text-lg font-semibold text-zinc-800 dark:text-zinc-100">
								{fact.title}
							</h3>
							<p className="mt-2 text-base text-zinc-600 dark:text-zinc-400">
								{fact.description}
							</p>
						</div>
					);
				})}
			</div>
		</Container>
	);
}
