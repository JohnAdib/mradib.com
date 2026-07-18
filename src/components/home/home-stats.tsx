import { Container } from "@/components/container";
import { StatBand } from "@/components/stat-band";
import { mentoringStats } from "@/data/mentoring-stats";

export function HomeStats() {
	const stats = [
		{ value: "17+", label: "years in software", href: "/about" },
		{
			value: `${mentoringStats.sessions}+`,
			label: "mentoring sessions",
			href: "/mentor",
		},
		{ value: "2", label: "startups co-founded", href: "/about#ventures" },
		{ value: "2,000+", label: "students taught", href: "/about" },
	];

	return (
		<Container className="mt-16 sm:mt-24">
			<StatBand stats={stats} />
		</Container>
	);
}
