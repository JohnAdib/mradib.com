import type { Metadata } from "next";
import { AwardLayout } from "@/components/award/award-layout";
import { getAward } from "@/data/awards";

const award = getAward("worldskills");

export const metadata: Metadata = {
	title: "WorldSkills, National Medalist and Coach",
	description:
		"John Adib's WorldSkills arc: Medallion for Excellence in IT Software Applications (2007), national Silver Medal in IT Software Solutions for Business (2010), two national team camps, then five years training medal-winning competitors.",
};

export default function Page() {
	return (
		<AwardLayout award={award}>
			<p>
				Long before I managed engineers, I competed against them. My WorldSkills
				story runs from a teenage <strong>Medallion for Excellence</strong> in
				IT Software Applications (2007) to a national{" "}
				<strong>Silver Medal</strong> in IT Software Solutions for Business
				(2010), with two selections to the national team training camps, for
				WorldSkills Calgary 2009 and WorldSkills London 2011.
			</p>

			<h2>What WorldSkills is</h2>
			<p>
				WorldSkills is the world's largest vocational skills competition, often
				called the "skills olympics." Every two years, national champions in
				dozens of disciplines compete internationally; getting anywhere near the
				national team means surviving rounds of timed, judged, real-world
				software challenges.
			</p>

			<h2>The arc: competitor to coach</h2>
			<p>
				The medals taught me to build under pressure: complete, working software
				against the clock, judged on details most users never see. But the part
				of the story I'm proudest of came after: from 2010 to 2015 I switched to
				the other side of the table as a WorldSkills expert and trainer,
				coaching the next generation of competitors. Several of them went on to
				win medals of their own.
			</p>
			<p>
				That switch, from winning to helping others win, quietly became the
				pattern of my whole career: competitor to coach, engineer to mentor,
				builder to <a href="/about">team leader</a>.
			</p>

			<h2>What it means to me</h2>
			<p>
				Competition taught me speed; coaching taught me patience. Twenty years
				later I still use both, usually in the same week.
			</p>
		</AwardLayout>
	);
}
