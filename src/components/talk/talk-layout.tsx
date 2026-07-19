import { ArrowLeftIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";
import { BreadcrumbJsonLD } from "@/components/breadcrumb/breadcrumb-json-ld";
import { Container } from "@/components/container";
import { TalkEventJsonLd } from "@/components/json-ld/talk-event-json-ld";
import type { ITalk } from "@/data/talks/talk-interface";
import { getTalkResources } from "@/lib/talks/get-talk-resources";
import { TalkHero } from "./talk-hero";
import { TalkPdfPreview } from "./talk-pdf-preview";
import { TalkResources } from "./talk-resources";

export function TalkLayout({
	talk,
	children,
}: {
	talk: ITalk;
	children?: React.ReactNode;
}) {
	const extras = getTalkResources(talk).filter((r) => r.kind !== "slides");

	const breadcrumb = [
		{ position: 1, name: "Home", item: "/", current: false },
		{ position: 2, name: "Talks", item: "/talks", current: false },
		{
			position: 3,
			name: talk.title,
			item: talk.path ?? "/talks",
			current: true,
		},
	];

	return (
		<Container className="mt-16 sm:mt-24">
			<BreadcrumbJsonLD list={breadcrumb} />
			<div className="mx-auto max-w-2xl">
				<Link
					href="/talks"
					className="group inline-flex items-center gap-2 text-sm font-medium text-zinc-500 transition hover:text-accent-700 dark:text-zinc-400 dark:hover:text-accent-400"
				>
					<ArrowLeftIcon className="h-4 w-4" />
					Back to talks
				</Link>

				<TalkHero talk={talk} />

				{children}

				{/* The slides preview below already shows talk.image, so skip this
				    standalone cover when both are set, the same photo twice reads
				    as a mistake, not a feature. */}
				{talk.image && !talk.slidesPdf && (
					<Image
						src={talk.image}
						alt={talk.title}
						width={1600}
						height={900}
						priority
						className="mt-8 h-auto w-full rounded-2xl ring-1 ring-zinc-900/10 dark:ring-zinc-700/50"
					/>
				)}

				{talk.slidesPdf && (
					<div className="mt-8">
						<TalkPdfPreview href={talk.slidesPdf} previewImage={talk.image} />
					</div>
				)}

				{extras.length > 0 && (
					<div className="mt-8">
						<h2 className="text-sm font-semibold tracking-wide text-zinc-600 uppercase dark:text-zinc-400">
							Resources
						</h2>
						<div className="mt-4">
							<TalkResources resources={extras} />
						</div>
					</div>
				)}
			</div>
			<TalkEventJsonLd talk={talk} />
		</Container>
	);
}
