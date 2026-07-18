import Link from "next/link";
import { experienceYears } from "@/data/profile";

function H2({ id, children }: { id?: string; children: React.ReactNode }) {
	return (
		<h2
			id={id}
			className="mt-10 scroll-mt-24 text-xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100"
		>
			{children}
		</h2>
	);
}

export function AboutStory() {
	const linkClass =
		"font-medium text-accent-700 transition hover:text-accent-600 dark:text-accent-400";

	return (
		<div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
			<p>
				I'm an Engineering Manager at Zapp in London, a two-time startup
				co-founder, and one of ADPList's most recognized engineering mentors.
				{experienceYears}+ years in, I still write code most days. I just spend
				more of my time making other engineers, and now AI, better at it.
			</p>

			<H2>It started with teaching</H2>
			<p>
				Before I led anyone, I taught: eleven years as a part-time computer
				lecturer across four universities and colleges, more than 2,000
				students, and free Persian video tutorials going back to 2006. As a
				teenager I competed in{" "}
				<Link href="/awards/worldskills" className={linkClass}>
					WorldSkills
				</Link>{" "}
				, winning a national silver medal and a Medallion for Excellence, then
				spent five years training the next generation of competitors. Teaching
				first, titles later: that order shaped everything.
			</p>

			<H2 id="ventures">The founder years</H2>
			<p>
				In 2015 I co-founded Sarshomar as CEO, a survey platform that raised
				$1M, grew to a 15-person team, and reached one million users in its
				first month. In 2019 I co-founded Jibres as CTO: a cloud e-commerce
				platform serving 1,200+ businesses, with a firewall blocking 99% of
				attacks and an "app factory" that generated a native Android app in
				under ten minutes. Jibres won the national best-site-builder award at
				the 14th Iran Web Festival in 2022. In between, I led engineering at
				Ermile, an education platform serving 500,000+ students, and lectured in
				IT at the University of Tehran.
			</p>

			<H2>London</H2>
			<p>
				In late 2022 my family and I moved to London. At Loopla I cut deployment
				cycles from months to under ten minutes and led a Vue to Next.js
				migration; in 2024, Tech Nation endorsed me as an{" "}
				<Link href="/awards/uk-global-talent" className={linkClass}>
					exceptional talent
				</Link>{" "}
				under the UK Global Talent visa. I joined Zapp in December 2024 as a
				senior engineer and was promoted to Engineering Manager in April 2026.
			</p>

			<H2>AI-first, by conviction</H2>
			<p>
				I believe AI belongs inside the way a team works: in reviews, in agents,
				in the definition of done. Not bolted on as a faster keyboard. At Zapp
				that means AI reviewers on every pull request, releases that went from
				monthly to weekly, and architecture deliberately shaped so AI can work
				on it safely. It's also what I{" "}
				<Link href="/talks" className={linkClass}>
					speak about
				</Link>
				: AI-first architecture, design systems, and the art of separation of
				concern.
			</p>

			<H2>Off duty</H2>
			<p>
				Away from work I'm a father of two daughters, a{" "}
				<Link href="/gallery" className={linkClass}>
					photographer
				</Link>{" "}
				whenever London's light cooperates, and a regular at this city's
				developer communities. I{" "}
				<Link href="/mentor" className={linkClass}>
					mentor on ADPList
				</Link>{" "}
				, 600+ sessions so far, because teaching is still the part I'd do even
				if nobody paid me for it. And I keep an open-source habit on GitHub.
			</p>
		</div>
	);
}
