import Link from "next/link";
import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal/reveal";
import { teachingStats, videoViewsCompact } from "@/data/teaching-stats";

function Strong({ children }: { children: React.ReactNode }) {
	return (
		<strong className="font-semibold text-zinc-800 dark:text-zinc-100">
			{children}
		</strong>
	);
}

const students = `${teachingStats.studentsTaught.toLocaleString("en-US")}+`;

export function HomeRise() {
	return (
		<Container className="mt-20 sm:mt-28">
			<Reveal>
				<p className="text-sm font-semibold tracking-wider text-accent-700 uppercase dark:text-accent-400">
					The rise
				</p>
				<h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold tracking-tight text-zinc-800 sm:text-4xl dark:text-zinc-100">
					First medals. Then classrooms. Then entrepreneurship.
				</h2>
			</Reveal>
			<div className="mt-8 max-w-2xl space-y-5 text-lg text-zinc-600 dark:text-zinc-400">
				<Reveal delay={100}>
					<p>
						<Strong>National medals</Strong> at WorldSkills.
					</p>
				</Reveal>
				<Reveal delay={200}>
					<p>
						<Strong>{students} students</Strong> across four institutions, and{" "}
						<Strong>{videoViewsCompact}+ views</Strong> on YouTube alone for
						free courses.
					</p>
				</Reveal>
				<Reveal delay={300}>
					<p>
						Then two companies: one raised <Strong>$1M</Strong> and reached{" "}
						<Strong>a million users</Strong> in its first month, the other
						served <Strong>1,200+ businesses</Strong>.
					</p>
				</Reveal>
			</div>
			<Reveal delay={400}>
				<Link
					href="/about"
					className="mt-8 inline-block text-sm font-medium text-accent-700 transition hover:text-accent-600 dark:text-accent-400"
				>
					The full story →
				</Link>
			</Reveal>
		</Container>
	);
}
