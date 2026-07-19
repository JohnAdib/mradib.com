import Image from "next/image";
import { StatBand } from "@/components/stat-band";
import { TiltCard } from "@/components/tilt-card/tilt-card";
import { mentoringStats } from "@/data/mentoring-stats";
import { experienceYears } from "@/data/profile";

const stats = [
	{ value: `${experienceYears}+`, label: "Years in software" },
	{ value: "2", label: "Startups co-founded" },
	{
		value: `${mentoringStats.sessions}+`,
		label: "Mentoring sessions",
		href: "/mentor",
	},
	{ value: "2,000+", label: "Students taught" },
];

export function AboutHero() {
	return (
		<div className="grid grid-cols-1 items-center gap-y-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-x-16">
			<div className="max-w-2xl">
				<p className="reveal-up text-sm font-medium tracking-wide text-accent-700 uppercase dark:text-accent-400">
					John Adib
				</p>
				<h1 className="mt-4 text-5xl font-bold tracking-tight text-zinc-800 sm:text-6xl dark:text-zinc-100">
					<span className="reveal-up reveal-delay-1 block">I build.</span>
					<span className="reveal-up reveal-delay-2 block">I teach.</span>
					<span className="reveal-up reveal-delay-3 block text-accent-700 dark:text-accent-400">
						I mentor.
					</span>
				</h1>
				<p className="reveal-up reveal-delay-4 mt-6 text-lg text-zinc-600 dark:text-zinc-400">
					{experienceYears}+ years in software, and I still write code most
					days. This is the long version: it starts with a keyboard my father
					brought home, and runs through two companies, thousands of students,
					and mentoring engineers around the world.
				</p>
			</div>
			<div className="reveal-up reveal-delay-2 mx-auto max-w-xs lg:mx-0 lg:pt-2">
				<TiltCard className="inline-block">
					<Image
						src="/img/john-adib-avatar.jpg"
						alt="John Adib, engineering leader in London"
						width={1280}
						height={1280}
						priority
						className="aspect-square w-64 rotate-3 rounded-2xl bg-zinc-100 object-cover sm:w-72 dark:bg-zinc-800"
					/>
				</TiltCard>
			</div>
			<div className="reveal-up reveal-delay-4 lg:col-span-2">
				<StatBand stats={stats} />
			</div>
		</div>
	);
}
