import { Button } from "@/components/button";
import { Container } from "@/components/container";

export function HomeClosing() {
	return (
		<Container className="my-20 sm:my-28">
			<div className="rounded-3xl bg-zinc-100/70 px-8 py-12 text-center ring-1 ring-zinc-100 sm:py-14 dark:bg-zinc-800/40 dark:ring-zinc-700/50">
				<h2 className="mx-auto max-w-xl text-2xl font-bold tracking-tight text-zinc-800 sm:text-3xl dark:text-zinc-100">
					Growing your career, or planning an event?
				</h2>
				<p className="mx-auto mt-3 max-w-xl text-base text-zinc-600 dark:text-zinc-400">
					Mentorship with me is always free, and I love a good stage.
				</p>
				<div className="mt-8 flex flex-wrap items-center justify-center gap-4">
					<Button href="/mentor">Explore free mentorship</Button>
					<Button href="/talks#invite" variant="secondary">
						Invite me to speak
					</Button>
				</div>
			</div>
		</Container>
	);
}
