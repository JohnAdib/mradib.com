import { Container } from "@/components/container";
import { StatBand } from "@/components/stat-band";
import { mentoringStats } from "@/data/mentoring-stats";

export function MentorStats() {
	const stats = [
		{
			value: `${mentoringStats.sessions}+`,
			label: "mentorship sessions",
			href: mentoringStats.profileUrl,
		},
		{
			value: `${mentoringStats.minutes.toLocaleString("en-GB")}+`,
			label: "mentoring minutes",
		},
		{
			value: "#1",
			label: "mentor in Europe, 2024",
			href: "/awards/number-1-mentor-in-europe",
		},
		{
			value: "Top 1%",
			label: "engineering mentor, 8+ months",
		},
		{
			value: "2×",
			label: "ADPList100 honouree, 2024 & 2026",
			href: "/awards/worlds-most-influential-mentor",
		},
	];

	return (
		<Container className="mt-16 sm:mt-20">
			<StatBand stats={stats} />
		</Container>
	);
}
