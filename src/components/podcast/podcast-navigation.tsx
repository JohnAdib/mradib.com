"use client";

import { useEffect, useState } from "react";

type Topic = { id: string; title: string };

export function PodcastNavigation({ topics }: { topics: Topic[] }) {
	const [active, setActive] = useState(topics[0].id);
	useEffect(() => {
		let frame = 0;
		const update = () => {
			let current = topics[0].id;
			for (const chapter of topics) {
				const node = document.getElementById(chapter.id);
				if (node && node.getBoundingClientRect().top <= 180)
					current = chapter.id;
			}
			setActive(current);
			frame = 0;
		};
		const scroll = () => {
			if (!frame) frame = requestAnimationFrame(update);
		};
		update();
		window.addEventListener("scroll", scroll, { passive: true });
		window.addEventListener("resize", scroll);
		return () => {
			window.removeEventListener("scroll", scroll);
			window.removeEventListener("resize", scroll);
			cancelAnimationFrame(frame);
		};
	}, [topics]);
	return (
		<aside className="self-start rounded-2xl bg-zinc-900/[0.025] p-5 lg:sticky lg:top-24 lg:max-h-[calc(100dvh-7rem)] lg:overflow-y-auto lg:bg-transparent lg:p-0 dark:bg-white/[0.025] lg:dark:bg-transparent">
			<details open>
				<summary className="cursor-pointer text-xs font-semibold tracking-wider text-zinc-500 uppercase dark:text-zinc-400">
					In this conversation
				</summary>
				<nav
					aria-label="Podcast topics"
					className="mt-4 grid gap-1 sm:grid-cols-2 lg:grid-cols-1"
				>
					{topics.map((chapter, index) => (
						<a
							key={chapter.id}
							href={`#${chapter.id}`}
							aria-current={active === chapter.id ? "location" : undefined}
							className="flex gap-3 rounded-lg px-3 py-2.5 text-xs leading-5 text-zinc-600 transition hover:bg-accent-500/10 hover:text-accent-700 aria-[current=location]:bg-accent-500/10 aria-[current=location]:text-accent-700 dark:text-zinc-400 dark:hover:text-accent-400 dark:aria-[current=location]:text-accent-400"
						>
							<span className="text-[10px] tabular-nums">
								{String(index + 1).padStart(2, "0")}
							</span>
							<span>{chapter.title}</span>
						</a>
					))}
				</nav>
			</details>
		</aside>
	);
}
