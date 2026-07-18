import {
	AcademicCapIcon,
	IdentificationIcon,
	MapPinIcon,
	TrophyIcon,
} from "@heroicons/react/24/outline";
import type { ComponentType } from "react";
import { AwardFlagshipCard } from "@/components/award/award-flagship-card";
import { SectionHeader } from "@/components/home/section-header";
import type { IAward } from "@/data/awards";

const flagshipIcons: Record<string, ComponentType<{ className?: string }>> = {
	"worlds-most-influential-mentor": TrophyIcon,
	"number-1-mentor-in-europe": MapPinIcon,
	"uk-global-talent": IdentificationIcon,
	worldskills: AcademicCapIcon,
};

function iconFor(award: IAward): ComponentType<{ className?: string }> {
	return flagshipIcons[award.slug ?? ""] ?? TrophyIcon;
}

/** The first award leads as a wide hero card, the rest form a row beneath it. */
export function AwardFlagshipShowcase({ awards }: { awards: IAward[] }) {
	const [hero, ...rest] = awards;

	return (
		<section className="mt-16">
			<SectionHeader title="The headline recognition" />
			<div className="relative mt-10 overflow-hidden rounded-3xl">
				<div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-accent-500/15 blur-3xl" />
				<div className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-accent-400/10 blur-3xl" />
				<div className="relative grid gap-6 p-1">
					<AwardFlagshipCard award={hero} icon={iconFor(hero)} featured />
					<div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
						{rest.map((award) => (
							<AwardFlagshipCard
								key={award.name}
								award={award}
								icon={iconFor(award)}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
