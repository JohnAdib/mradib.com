import Link from "next/link";
import { Button } from "@/components/button";
import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal/reveal";

export function HomeInvitation() {
	return (
		<Container className="my-20 sm:my-28">
			<Reveal>
				<div className="relative overflow-hidden rounded-3xl bg-zinc-100/70 px-8 py-12 text-center ring-1 ring-zinc-900/10 sm:py-14 dark:bg-zinc-800/40 dark:ring-zinc-700/50">
					<div
						aria-hidden="true"
						className="absolute -top-24 -right-20 h-64 w-64 rounded-full bg-accent-500/10 blur-3xl"
					/>
					<div
						aria-hidden="true"
						className="absolute -bottom-28 -left-16 h-56 w-56 rounded-full bg-accent-400/10 blur-3xl"
					/>
					<div className="relative">
						<h2 className="mx-auto max-w-xl font-display text-3xl font-semibold tracking-tight text-zinc-800 sm:text-4xl dark:text-zinc-100">
							The next chapter is already in the works.
						</h2>
						<p className="mx-auto mt-4 max-w-xl text-base text-zinc-600 dark:text-zinc-400">
							Away from the terminal, I'm a father of two girls, and I carry a
							camera almost everywhere. The freshest frames live in the{" "}
							<Link
								href="/gallery"
								className="font-medium text-accent-700 transition hover:text-accent-600 dark:text-accent-400"
							>
								photography corner
							</Link>
							.
						</p>
						<p className="mx-auto mt-3 max-w-xl text-base text-zinc-600 dark:text-zinc-400">
							Growing your career, or planning an event? I keep a limited number
							of free mentorship slots open, and I love a good stage.
						</p>
						<div className="mt-8 flex flex-wrap items-center justify-center gap-4">
							<Button href="/mentor">Explore mentorship</Button>
							<Button href="/contact" variant="secondary">
								Invite me to speak
							</Button>
						</div>
					</div>
				</div>
			</Reveal>
		</Container>
	);
}
