import { BreadcrumbJsonLD } from "@/components/breadcrumb/breadcrumb-json-ld";
import { Button } from "@/components/button";
import { Container } from "@/components/container";
import { podcastChapters } from "@/data/podcast/chapters";
import { podcastEpisode as episode } from "@/data/podcast/episode";
import { PodcastChapter } from "./podcast-chapter";
import { PodcastHero } from "./podcast-hero";
import { PodcastHostLink } from "./podcast-host-link";
import { PodcastJsonLd } from "./podcast-json-ld";
import { PodcastNavigation } from "./podcast-navigation";

export function PodcastPage() {
	return (
		<Container className="mt-16 sm:mt-24">
			<BreadcrumbJsonLD
				list={[
					{ position: 1, name: "Home", item: "/", current: false },
					{ position: 2, name: "Talks", item: "/talks", current: false },
					{
						position: 3,
						name: episode.title,
						item: episode.path,
						current: true,
					},
				]}
			/>
			<PodcastHero />
			<div
				id="conversation"
				className="mt-12 grid scroll-mt-24 gap-12 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-14"
			>
				<PodcastNavigation
					topics={podcastChapters.map(({ id, title }) => ({ id, title }))}
				/>
				<article
					aria-label="Ten ideas from the conversation"
					className="min-w-0 space-y-12"
				>
					{podcastChapters.map((chapter, index) => (
						<PodcastChapter key={chapter.id} chapter={chapter} index={index} />
					))}
				</article>
			</div>
			<section className="mt-12 rounded-3xl bg-zinc-900 p-8 text-zinc-100 sm:p-12 dark:bg-zinc-800/60">
				<h2 className="font-display text-3xl font-semibold tracking-tight">
					Hear the whole conversation.
				</h2>
				<p className="mt-4 max-w-xl text-sm leading-7 text-zinc-400">
					Listen to the full episode with <PodcastHostLink />, including the
					questions and examples behind these ideas.
				</p>
				<div className="mt-6 flex flex-wrap gap-5">
					<Button href={episode.url}>Listen on Spotify</Button>
					<a
						href="/talks"
						className="inline-flex items-center py-2 text-sm font-medium"
					>
						More talks →
					</a>
				</div>
			</section>
			<PodcastJsonLd />
		</Container>
	);
}
