import type { AwardGroup, IAward } from "@/data/awards";
import { AwardCard } from "./award-card";

const groupTitles: Record<AwardGroup, string> = {
	mentorship: "Mentorship",
	national: "National recognition & immigration",
	competition: "Competition",
	product: "Product & web",
	service: "Service & judging",
};

const groupOrder: AwardGroup[] = [
	"mentorship",
	"national",
	"competition",
	"product",
	"service",
];

export function AwardGroupList({ awards }: { awards: IAward[] }) {
	return (
		<div className="space-y-16">
			{groupOrder.map((group) => {
				const groupAwards = awards.filter((award) => award.group === group);
				if (groupAwards.length === 0) {
					return null;
				}
				return (
					<section key={group}>
						<h2 className="text-lg font-semibold text-zinc-800 dark:text-zinc-100">
							{groupTitles[group]}
						</h2>
						<div className="mt-8 grid grid-cols-1 gap-x-12 gap-y-12 sm:grid-cols-2">
							{groupAwards.map((award) => (
								<AwardCard key={award.name} award={award} />
							))}
						</div>
					</section>
				);
			})}
		</div>
	);
}
