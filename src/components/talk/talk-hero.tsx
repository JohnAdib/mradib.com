import type { ITalk } from "@/data/talks/talk-interface";
import { TalkFacts } from "./talk-facts";
import { TalkHeroVideo } from "./talk-hero-video";
import { TalkLogo } from "./talk-logo";

function kindOf(talk: ITalk): string {
	if (talk.format === "workshop") {
		return "Workshop";
	}
	if (talk.format === "panel") {
		return "Panel";
	}
	return "Talk";
}

function PlainHeader({ talk }: { talk: ITalk }) {
	return (
		<header className="mt-8 flex items-start gap-4">
			<TalkLogo talk={talk} className="h-20 w-20" />
			<div className="min-w-0">
				<p className="text-xs font-medium tracking-wide text-zinc-500 uppercase dark:text-zinc-400">
					{kindOf(talk)} · {talk.event}
				</p>
				<h1 className="mt-2 text-3xl font-bold tracking-tight text-balance text-zinc-800 sm:text-4xl dark:text-zinc-100">
					{talk.title}
				</h1>
			</div>
		</header>
	);
}

function VideoHeader({ talk, videoSrc }: { talk: ITalk; videoSrc: string }) {
	return (
		<header className="relative mt-8 flex min-h-[280px] flex-col justify-end overflow-hidden rounded-2xl p-6 sm:min-h-[360px] sm:p-8">
			<TalkHeroVideo src={videoSrc} poster={talk.image} />
			<div
				aria-hidden="true"
				className="absolute inset-0 bg-gradient-to-t from-zinc-900/85 via-zinc-900/55 to-zinc-900/20"
			/>
			<div className="relative">
				<TalkLogo talk={talk} className="h-14 w-14 ring-2 ring-white/20" />
				<p className="mt-4 text-xs font-medium tracking-wide text-white/70 uppercase">
					{kindOf(talk)} · {talk.event}
				</p>
				<h1 className="mt-2 text-3xl font-bold tracking-tight text-balance text-white sm:text-4xl">
					{talk.title}
				</h1>
			</div>
		</header>
	);
}

/** Header (plain or video-backed), then facts, then the summary. Facts sit before the summary so where/when reads first. */
export function TalkHero({ talk }: { talk: ITalk }) {
	return (
		<>
			{talk.video ? (
				<VideoHeader talk={talk} videoSrc={talk.video} />
			) : (
				<PlainHeader talk={talk} />
			)}
			<div className="mt-6">
				<TalkFacts talk={talk} />
			</div>
			<p className="mt-6 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
				{talk.summary}
			</p>
		</>
	);
}
