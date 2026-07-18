import { ArrowLeftIcon } from "@heroicons/react/20/solid";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { Button } from "@/components/button";
import { Container } from "@/components/container";
import { TalkEventJsonLd } from "@/components/json-ld/talk-event-json-ld";
import type { ITalk } from "@/data/talks/talk-interface";
import { getTalkResources } from "@/lib/talks/get-talk-resources";
import { TalkFacts } from "./talk-facts";
import { TalkLogo } from "./talk-logo";
import { TalkResources } from "./talk-resources";

export function TalkLayout({
	talk,
	coverImage,
}: {
	talk: ITalk;
	coverImage?: StaticImageData;
}) {
	const extras = getTalkResources(talk).filter((r) => r.kind !== "slides");
	const kind =
		talk.format === "workshop"
			? "Workshop"
			: talk.format === "panel"
				? "Panel"
				: "Talk";

	return (
		<Container className="mt-16 sm:mt-24">
			<div className="mx-auto max-w-2xl">
				<Link
					href="/talks"
					className="group inline-flex items-center gap-2 text-sm font-medium text-zinc-500 transition hover:text-accent-700 dark:text-zinc-400 dark:hover:text-accent-400"
				>
					<ArrowLeftIcon className="h-4 w-4" />
					Back to talks
				</Link>

				<header className="mt-8 flex items-start gap-4">
					<TalkLogo talk={talk} className="h-20 w-20" />
					<div className="min-w-0">
						<p className="text-xs font-medium tracking-wide text-zinc-500 uppercase dark:text-zinc-400">
							{kind} · {talk.event}
						</p>
						<h1 className="mt-2 text-3xl font-bold tracking-tight text-balance text-zinc-800 sm:text-4xl dark:text-zinc-100">
							{talk.title}
						</h1>
					</div>
				</header>

				<p className="mt-6 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
					{talk.summary}
				</p>

				{coverImage && (
					<Image
						src={coverImage}
						alt={talk.title}
						priority
						className="mt-8 rounded-2xl ring-1 ring-zinc-100 dark:ring-zinc-700/50"
					/>
				)}

				<div className="mt-8">
					<TalkFacts talk={talk} />
				</div>

				{talk.slidesPdf && (
					<div className="mt-8">
						<Button
							href={talk.slidesPdf}
							variant="primary"
							target="_blank"
							rel="noopener noreferrer"
						>
							Download slides (PDF)
						</Button>
					</div>
				)}

				{extras.length > 0 && (
					<div className="mt-8">
						<h2 className="text-sm font-semibold tracking-wide text-zinc-400 uppercase dark:text-zinc-500">
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
