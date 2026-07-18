import type { Metadata } from "next";
import { SimpleLayout } from "@/components/simple-layout";
import { mentoringStats } from "@/data/mentoring-stats";

export const metadata: Metadata = {
	title: "Now",
	description:
		"What John Adib is doing now: leading a consumer engineering team at Zapp in London, pushing AI-first development, mentoring on ADPList, and preparing his next talks. Updated July 2026.",
};

const nowItems = [
	"Leading a consumer engineering team at Zapp in London. Weekly releases, AI reviewers on every pull request.",
	"Making AI-first development the default, not the experiment: agents, skills, and architecture that AI can safely work on.",
	`Mentoring on ADPList, ${mentoringStats.sessions}+ sessions and counting, plus startup founders through MassChallenge Switzerland & UK.`,
	"Preparing my next talks on AI-first architecture and design systems. Invitations welcome.",
	"Raising two daughters, the most important job I have.",
];

export default function NowPage() {
	return (
		<SimpleLayout
			title="What I'm doing now"
			intro="A quarterly snapshot. Last updated July 2026."
		>
			<ul className="max-w-2xl list-inside list-[square] space-y-4 text-base text-zinc-600 dark:text-zinc-400">
				{nowItems.map((item) => (
					<li key={item}>{item}</li>
				))}
			</ul>
		</SimpleLayout>
	);
}
