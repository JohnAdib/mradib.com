import {
	ClipboardDocumentCheckIcon,
	DocumentTextIcon,
	MapIcon,
	VideoCameraIcon,
} from "@heroicons/react/24/outline";
import type { ComponentType } from "react";
import { Container } from "@/components/container";
import {
	auditDeliverables,
	auditDeliverablesHeading,
	type IAuditDeliverable,
} from "@/data/audit";

type IconType = ComponentType<{ className?: string; "aria-hidden"?: boolean }>;

const iconBySlug: Record<IAuditDeliverable["slug"], IconType> = {
	scorecard: ClipboardDocumentCheckIcon as IconType,
	report: DocumentTextIcon as IconType,
	roadmap: MapIcon as IconType,
	readout: VideoCameraIcon as IconType,
};

export function AuditDeliverables() {
	return (
		<Container className="mt-16 sm:mt-24">
			<p className="text-sm font-semibold tracking-wider text-accent-700 uppercase dark:text-accent-400">
				{auditDeliverablesHeading.eyebrow}
			</p>
			<h2 className="mt-3 max-w-2xl font-display text-2xl font-semibold tracking-tight text-zinc-800 sm:text-3xl dark:text-zinc-100">
				{auditDeliverablesHeading.title}
			</h2>
			<p className="mt-4 max-w-2xl text-base text-zinc-600 dark:text-zinc-400">
				{auditDeliverablesHeading.intro}
			</p>
			<div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
				{auditDeliverables.map((deliverable) => {
					const Icon = iconBySlug[deliverable.slug];
					return (
						<div
							key={deliverable.slug}
							className="rounded-3xl bg-surface p-6 ring-1 ring-zinc-900/10 transition hover:-translate-y-1 hover:shadow-lg dark:bg-zinc-800/40 dark:ring-zinc-700/50"
						>
							<span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent-700/10 text-accent-700 dark:bg-accent-400/10 dark:text-accent-400">
								<Icon aria-hidden={true} className="h-6 w-6" />
							</span>
							<h3 className="mt-5 text-lg font-semibold text-zinc-800 dark:text-zinc-100">
								{deliverable.title}
							</h3>
							<p className="mt-2 text-base text-zinc-600 dark:text-zinc-400">
								{deliverable.description}
							</p>
						</div>
					);
				})}
			</div>
		</Container>
	);
}
