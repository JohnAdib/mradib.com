import type { Metadata } from "next";
import Link from "next/link";
import { AwardLayout } from "@/components/award/award-layout";
import { getAward } from "@/data/awards";

const award = getAward("number-1-mentor-in-europe");

export const metadata: Metadata = {
	title: "#1 Mentor in Europe (2024)",
	description:
		"In December 2024, the 2024 ADPList Wrapped ranked John Adib the #1 mentor in Europe, seven months after his first session. The numbers behind the ranking.",
};

export default function Page() {
	return (
		<AwardLayout award={award}>
			<p>
				In December 2024, ADPList published its year-in-review, the{" "}
				<strong>2024 ADPList Wrapped</strong>, and ranked me the{" "}
				<strong>#1 mentor in Europe</strong>.
			</p>

			<h2>What the ranking is</h2>
			<p>
				ADPList Wrapped is a data-driven annual review of the platform's global
				mentoring community: sessions delivered, minutes given, consistency, and
				mentee feedback across tens of thousands of mentors. The Europe top-10
				is computed, not nominated. You can't campaign for it.
			</p>

			<h2>The numbers behind it</h2>
			<p>
				I gave my first ADPList session in June 2024. By the end of that year:
			</p>
			<ul>
				<li>100-session milestone reached by August, 200 by September</li>
				<li>10,000+ mentoring minutes by October</li>
				<li>
					Top 1% Engineering Mentor for four consecutive months (July to October
					2024)
				</li>
				<li>Sessions with engineers across dozens of countries</li>
			</ul>
			<p>
				Seven months from first session to first in Europe. Not because any
				single session was heroic, but because the calendar never went quiet.
				Consistency compounds. The same practice later led to the{" "}
				<Link href="/awards/worlds-most-influential-mentor">
					World's Most Influential Mentor
				</Link>{" "}
				recognition.
			</p>

			<h2>What it means to me</h2>
			<p>
				Rankings measure hours; they can't measure what actually matters: the
				engineer who negotiated a fair offer, the career-switcher who stopped
				doubting themselves, the applicant whose visa evidence finally made
				sense. The number one I care about is the next person on the calendar.
			</p>

			<h2>Want a session?</h2>
			<p>
				<Link href="/mentor">Book a session</Link>. European timezone friendly,
				but the whole world is welcome.
			</p>
		</AwardLayout>
	);
}
