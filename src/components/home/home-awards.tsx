import { AwardCard } from "@/components/award/award-card";
import { Container } from "@/components/container";
import { flagshipAwards } from "@/data/awards";
import { SectionHeader } from "./section-header";

export function HomeAwards() {
	return (
		<Container className="mt-20 sm:mt-28">
			<SectionHeader
				title="Recognition"
				href="/awards"
				linkText="All awards & recognition"
			/>
			<div className="mt-10 grid grid-cols-1 gap-x-12 gap-y-12 sm:grid-cols-2">
				{flagshipAwards.map((award) => (
					<AwardCard key={award.name} award={award} />
				))}
			</div>
		</Container>
	);
}
