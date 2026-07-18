import type { Metadata } from "next";
import { AwardLayout } from "@/components/award/award-layout";
import { getAward } from "@/data/awards";

const award = getAward("worlds-most-influential-mentor");

export const metadata: Metadata = {
	title: "The World's Most Influential Mentor (2024)",
	description:
		"In February 2025, ADPList named John Adib one of The World's Most Influential Mentors of 2024, the ADPList100, selected from 32,000+ mentors across 140+ countries, and listed him again in 2026.",
};

export default function Page() {
	return (
		<AwardLayout award={award}>
			<p>
				In February 2025, ADPList named me one of{" "}
				<strong>The World's Most Influential Mentors of 2024</strong>, the
				ADPList100, selected from more than 32,000 mentors across 140+
				countries. In 2026, I was honoured to appear on the list again.
			</p>

			<h2>What the ADPList100 is</h2>
			<p>
				ADPList is the world's largest mentorship platform, and the ADPList100
				is its annual honours list: one hundred mentors across seven categories,
				drawn from tens of thousands of nominations worldwide. I was recognized
				in the Software Engineering category.
			</p>

			<h2>The work behind it</h2>
			<p>
				I joined ADPList as a mentor in June 2024. What started as a few weekend
				sessions turned into a practice: 600+ free sessions covering engineering
				careers, resume reviews, interview preparation, tech immigration, and
				the unglamorous details of growing from engineer to leader. The award
				citation quoted something I still believe:
			</p>
			<blockquote>
				<p>
					"The best part of my weekend is often a conversation with someone I
					have never met, in a country I have never visited."
				</p>
			</blockquote>
			<p>
				The same year, ADPList's data ranked me the{" "}
				<a href="/awards/number-1-mentor-in-europe">#1 mentor in Europe</a>, a
				separate story, told by the numbers.
			</p>

			<h2>What it means to me</h2>
			<p>
				I started my career teaching, long before I managed anyone. This award
				didn't change what my weekends look like. It just confirmed that showing
				up consistently for strangers is worth it. If a session helps one
				engineer negotiate better, pass an interview, or believe a move to a new
				country is possible, that's the real award. The list is a lagging
				indicator.
			</p>

			<h2>Want a session?</h2>
			<p>
				Mentorship with me is free. <a href="/mentor">Book a session</a> and
				bring a real problem: career, code, resume, or visa.
			</p>
		</AwardLayout>
	);
}
