import Link from "next/link";
import { Container } from "@/components/container";
import { StatBand } from "@/components/stat-band";
import { auditProof, type IAuditStatSpec } from "@/data/audit";
import { mentoringStats } from "@/data/mentoring-stats";
import { experienceYears } from "@/data/profile";
import { getTalk } from "@/data/talks/get-talk";
import { AuditProofTalkCard } from "./audit-proof-talk-card";

function statValue(spec: IAuditStatSpec): string {
	if (spec.slug === "years") {
		return `${experienceYears}+`;
	}
	if (spec.slug === "sessions") {
		return `${mentoringStats.sessions}+`;
	}
	return spec.value ?? "";
}

const smallHeading =
	"mt-12 text-sm font-semibold tracking-wider text-accent-700 uppercase dark:text-accent-400";

export function AuditProof() {
	const stats = auditProof.stats.map((spec) => ({
		value: statValue(spec),
		label: spec.label,
	}));
	return (
		<Container className="mt-16 sm:mt-24">
			<p className="text-sm font-semibold tracking-wider text-accent-700 uppercase dark:text-accent-400">
				{auditProof.heading.eyebrow}
			</p>
			<h2 className="mt-3 max-w-2xl font-display text-2xl font-semibold tracking-tight text-zinc-800 sm:text-3xl dark:text-zinc-100">
				{auditProof.heading.title}
			</h2>
			<p className="mt-4 max-w-2xl text-base text-zinc-600 dark:text-zinc-400">
				{auditProof.heading.intro}
			</p>
			<div className="mt-10">
				<StatBand stats={stats} />
			</div>
			<p className="mt-10 max-w-2xl font-display text-xl font-semibold tracking-tight text-zinc-800 sm:text-2xl dark:text-zinc-100">
				{auditProof.playbookLine}
			</p>
			<h3 className={smallHeading}>{auditProof.talksTitle}</h3>
			<div className="mt-6 grid gap-6 lg:grid-cols-2">
				{auditProof.talkSlugs.map((slug) => (
					<AuditProofTalkCard key={slug} talk={getTalk(slug)} />
				))}
			</div>
			<h3 className={smallHeading}>{auditProof.productsTitle}</h3>
			<div className="mt-6 grid gap-6 sm:grid-cols-2">
				{auditProof.products.map((product) => (
					<div
						key={product.name}
						className="rounded-3xl bg-surface p-6 ring-1 ring-zinc-900/10 dark:bg-zinc-800/40 dark:ring-zinc-700/50"
					>
						<h4 className="text-lg font-semibold text-zinc-800 dark:text-zinc-100">
							{product.url ? (
								<Link
									href={product.url}
									target="_blank"
									rel="noopener noreferrer"
									className="text-accent-700 hover:underline dark:text-accent-400"
								>
									{product.name}
								</Link>
							) : (
								product.name
							)}
						</h4>
						<p className="mt-2 text-base text-zinc-600 dark:text-zinc-400">
							{product.description}
						</p>
					</div>
				))}
			</div>
		</Container>
	);
}
