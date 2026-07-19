import Link from "next/link";
import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal/reveal";

const recommendationsUrl =
	"https://www.linkedin.com/in/mradib/details/recommendations/";

export function HomeRecognition() {
	return (
		<Container className="mt-20 sm:mt-28">
			<Reveal>
				<p className="text-sm font-semibold tracking-wider text-accent-700 uppercase dark:text-accent-400">
					Recognition
				</p>
				<h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold tracking-tight text-zinc-800 sm:text-4xl dark:text-zinc-100">
					Endorsed by the UK. Named by ADPList.
				</h2>
			</Reveal>
			<Reveal delay={100}>
				<p className="mt-6 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
					In 2024 the UK government endorsed me as exceptional talent in
					technology. ADPList named me The World's Most Influential Mentor,
					selected from 32,000+ mentors across 140+ countries.
				</p>
			</Reveal>
			<Reveal delay={200}>
				<figure className="mt-10 max-w-2xl">
					<blockquote className="font-display text-2xl tracking-tight text-zinc-800 italic sm:text-3xl dark:text-zinc-100">
						&ldquo;The best software engineer I have ever met.&rdquo;
					</blockquote>
					<figcaption className="mt-4 text-sm text-zinc-500 dark:text-zinc-400">
						<a
							href={recommendationsUrl}
							target="_blank"
							rel="noreferrer"
							className="transition hover:text-accent-700 dark:hover:text-accent-400"
						>
							Qudrat Ullah, Senior Lead Software Engineer, on LinkedIn
						</a>
					</figcaption>
				</figure>
			</Reveal>
			<Reveal delay={300}>
				<Link
					href="/awards"
					className="mt-8 inline-block text-sm font-medium text-accent-700 transition hover:text-accent-600 dark:text-accent-400"
				>
					All awards →
				</Link>
			</Reveal>
		</Container>
	);
}
