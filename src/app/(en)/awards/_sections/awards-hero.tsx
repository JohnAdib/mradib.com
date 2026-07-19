import { Container } from "@/components/container";
import { StatBand } from "@/components/stat-band";
import { mentoringAwardsCount } from "@/data/awards";
import { mentoringStats } from "@/data/mentoring-stats";

const stats = [
	{
		value: "#1",
		label: "mentor in Europe, 2024",
		href: "/awards/number-1-mentor-in-europe",
	},
	{
		value: "1 of 100",
		label: "ADPList100, worldwide",
		href: "/awards/worlds-most-influential-mentor",
	},
	{ value: `${mentoringAwardsCount}`, label: "awards for mentoring" },
	{
		value: `${mentoringStats.sessions}+`,
		label: "mentorship sessions",
		href: mentoringStats.profileUrl,
	},
];

const intro =
	"I've been named ADPList's World's Most Influential Mentor (2024), ranked #1 Mentor in Europe (2024), endorsed as a UK Global Talent by Tech Nation (2024), and medalled in national WorldSkills competitions. Here is all of it, with evidence and the stories behind it.";

const kicker =
	"Awards are lagging indicators. The leading ones are the sessions, the students, and the shipped work. That is the part I actually control.";

export function AwardsHero() {
	return (
		<Container className="mt-16 sm:mt-32">
			<header className="max-w-2xl">
				<h1 className="font-display text-5xl font-semibold tracking-tight text-zinc-800 sm:text-6xl dark:text-zinc-100">
					Awards & Recognition
				</h1>
				<p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
					{intro}
				</p>
			</header>
			<div className="mt-12 sm:mt-16">
				<StatBand stats={stats} />
			</div>
			<p className="mt-12 max-w-2xl font-display text-lg text-zinc-500 italic dark:text-zinc-400">
				{kicker}
			</p>
		</Container>
	);
}
