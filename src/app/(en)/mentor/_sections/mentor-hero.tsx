import Image from "next/image";
import { Button } from "@/components/button";
import { Container } from "@/components/container";
import { mentoringStats } from "@/data/mentoring-stats";
import imgMradibMentoring from "../_img/mradib-mentoring.png";

export function MentorHero() {
	return (
		<Container className="mt-16 sm:mt-24">
			<div className="max-w-2xl">
				<p className="reveal-up text-sm font-medium tracking-wide text-accent-700 uppercase dark:text-accent-400">
					Mentorship
				</p>
				<h1 className="reveal-up reveal-delay-1 mt-4 font-display text-4xl font-semibold tracking-tight text-zinc-800 sm:text-6xl dark:text-zinc-100">
					The World's Most Influential Mentor,{" "}
					<span className="italic text-accent-700 dark:text-accent-400">
						in your corner.
					</span>
				</h1>
				<p className="reveal-up reveal-delay-2 mt-6 text-lg text-zinc-600 dark:text-zinc-400">
					I'm John Adib. Across {mentoringStats.sessions}+ one to one sessions,
					I've helped engineers grow their careers, sharpen their resumes, walk
					into interviews ready, and find their footing through tech
					immigration. ADPList ranked me #1 Mentor in Europe and named me to the
					ADPList100 in 2024, then again in 2026. A few free slots open every
					month, and one of them could be yours.
				</p>
				<div className="reveal-up reveal-delay-3 mt-8 flex flex-wrap items-center gap-4">
					<Button href="#book">Book a session</Button>
					<Button href="#faq" variant="secondary">
						Questions answered
					</Button>
				</div>
			</div>
			<div className="reveal-up reveal-delay-4 mt-12 sm:mt-16">
				<Image
					src={imgMradibMentoring}
					alt="John Adib, mentoring on ADPList"
					priority
					className="w-full rounded-2xl shadow-xl ring-1 ring-zinc-900/10 dark:ring-white/10"
				/>
			</div>
		</Container>
	);
}
