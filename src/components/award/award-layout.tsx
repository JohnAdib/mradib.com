import Link from "next/link";
import { BreadcrumbJsonLD } from "@/components/breadcrumb/breadcrumb-json-ld";
import { Button } from "@/components/button";
import { Container } from "@/components/container";
import { Prose } from "@/components/prose";
import type { IAward } from "@/data/awards";

export function AwardLayout({
	award,
	children,
}: {
	award: IAward;
	children: React.ReactNode;
}) {
	const breadcrumb = [
		{ position: 1, name: "Home", item: "/", current: false },
		{ position: 2, name: "Awards", item: "/awards", current: false },
		{
			position: 3,
			name: award.name,
			item: `/awards/${award.slug}`,
			current: true,
		},
	];

	return (
		<Container className="mt-16 sm:mt-24">
			<BreadcrumbJsonLD list={breadcrumb} />
			<div className="mx-auto max-w-2xl">
				<header>
					<p className="text-sm font-medium text-teal-600 dark:text-teal-400">
						{award.issuer} · {award.date.slice(0, 4)}
					</p>
					<h1 className="mt-3 text-3xl font-bold tracking-tight text-zinc-800 sm:text-4xl dark:text-zinc-100">
						{award.name}
					</h1>
				</header>
				<Prose className="mt-8">{children}</Prose>
				{award.externalUrl && (
					<div className="mt-10">
						<Button
							href={award.externalUrl}
							variant="secondary"
							target="_blank"
							rel="noopener noreferrer"
						>
							Verify with {award.issuer} ↗
						</Button>
					</div>
				)}
				<footer className="mt-12 flex flex-wrap gap-x-6 gap-y-2 border-t border-zinc-100 pt-6 text-sm dark:border-zinc-700/40">
					<Link
						href="/awards"
						className="font-medium text-teal-600 transition hover:text-teal-500 dark:text-teal-400"
					>
						← All awards & recognition
					</Link>
					<Link
						href="/mentor"
						className="font-medium text-teal-600 transition hover:text-teal-500 dark:text-teal-400"
					>
						Book a free mentorship session →
					</Link>
				</footer>
			</div>
		</Container>
	);
}
