import Link from "next/link";
import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal/reveal";
import { getTalk } from "@/data/talks/get-talk";

const talk = getTalk("ai-first-architecture");

function Strong({ children }: { children: React.ReactNode }) {
	return <strong className="font-semibold text-white">{children}</strong>;
}

export function HomeNow() {
	return (
		<Container className="mt-20 sm:mt-28">
			<Reveal>
				<div className="relative overflow-hidden rounded-3xl bg-zinc-900 px-8 py-12 sm:px-12 sm:py-14 dark:ring-1 dark:ring-zinc-700/60">
					<div
						aria-hidden="true"
						className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-accent-500/15 blur-3xl"
					/>
					<div
						aria-hidden="true"
						className="absolute -bottom-40 -left-24 h-80 w-80 rounded-full bg-accent-400/10 blur-3xl"
					/>
					<div className="relative">
						<p className="text-sm font-semibold tracking-wider text-accent-400 uppercase">
							AI-first, for real
						</p>
						<h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
							AI isn't a tool choice. It's how the team works.
						</h2>
						<p className="mt-5 max-w-2xl text-lg text-zinc-300">
							I lead engineering in London with AI in the loop:{" "}
							<Strong>three AI reviewers</Strong> on every pull request,
							releases taken from <Strong>monthly to weekly</Strong>.
						</p>
						<p className="mt-4 max-w-2xl text-lg text-zinc-300">
							I took the thesis to the <Strong>AI Coding Summit</Strong>, 5,000+
							engineers, and to <Strong>React Advanced London</Strong> at Figma.
						</p>
						<Link
							href={talk.path ?? "/talks"}
							className="mt-8 inline-block text-sm font-medium text-accent-400 transition hover:text-accent-300"
						>
							The thesis: AI-First Architecture →
						</Link>
					</div>
				</div>
			</Reveal>
		</Container>
	);
}
