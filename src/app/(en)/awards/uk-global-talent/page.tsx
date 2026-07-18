import type { Metadata } from "next";
import { AwardLayout } from "@/components/award/award-layout";
import { getAward } from "@/data/awards";

const award = getAward("uk-global-talent");

export const metadata: Metadata = {
	title: "UK Global Talent Visa, Tech Nation Endorsement (2024)",
	description:
		"In September 2024, John Adib was endorsed by Tech Nation as an exceptional talent in technology under the UK Global Talent visa route. What the endorsement is, the work behind it, and honest advice for applicants.",
};

export default function Page() {
	return (
		<AwardLayout award={award}>
			<p>
				In September 2024, I was endorsed by <strong>Tech Nation</strong> as an{" "}
				<strong>exceptional talent in technology</strong> under the UK Global
				Talent visa route.
			</p>

			<h2>What the Global Talent endorsement is</h2>
			<p>
				The Global Talent visa is the UK's immigration route for leaders, and
				potential leaders, in digital technology. Unlike a work visa, nobody
				sponsors you: an endorsing body examines years of evidence of impact
				inside and outside your day job and decides whether you qualify as
				exceptional talent. It's less a form than a career audit.
			</p>

			<h2>The work behind it</h2>
			<p>
				My evidence was seventeen years in the making: co-founding Sarshomar (a
				survey platform that raised $1M and reached one million users in its
				first month) and Jibres (an e-commerce platform serving 1,200+
				businesses that won a national award), leading engineering teams,
				teaching 2,000+ students, open-source work, and mentoring. Building two
				companies in a challenging market, then starting again from zero in
				London, turned out to be the story the evidence told on its own.
			</p>

			<h2>If you're applying, honest advice</h2>
			<ul>
				<li>
					<strong>Start collecting evidence early.</strong> Impact is easy to
					create and hard to reconstruct. Save the numbers, screenshots, and
					press as they happen.
				</li>
				<li>
					<strong>Show impact beyond your employer.</strong> Mentoring, open
					source, talks, and community work carry real weight. They prove the
					"leader in the field" claim your job title can't.
				</li>
				<li>
					<strong>Let numbers do the talking.</strong> "Served 1,200+
					businesses" beats a paragraph of adjectives.
				</li>
				<li>
					<strong>Write a narrative, not a CV.</strong> The personal statement
					should explain why the field is better because you're in it, and what
					you'll do in the UK.
				</li>
			</ul>
			<p>
				I regularly review Global Talent cases in{" "}
				<a href="/mentor">mentoring sessions</a>. Bring yours.
			</p>

			<h2>What it means to me</h2>
			<p>
				This endorsement is the one I hold most personally. It's the UK saying
				"we looked at everything you've built, and we want you here." I try to
				repay that welcome by helping the next engineer through the same door.
			</p>
		</AwardLayout>
	);
}
