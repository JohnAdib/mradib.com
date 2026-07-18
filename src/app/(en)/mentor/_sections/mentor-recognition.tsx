import Link from "next/link";
import { AwardCard } from "@/components/award/award-card";
import { Container } from "@/components/container";
import { adplistBadgeTimeline, flagshipAwards } from "@/data/awards";

export function MentorRecognition() {
	const mentorAwards = flagshipAwards.filter(
		(award) => award.group === "mentorship",
	);

	return (
		<Container className="mt-16 sm:mt-24">
			<h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
				Recognition
			</h2>
			<div className="mt-8 grid grid-cols-1 gap-x-12 gap-y-12 sm:grid-cols-2">
				{mentorAwards.map((award) => (
					<AwardCard key={award.name} award={award} />
				))}
			</div>
			<ul className="mt-10 max-w-2xl list-inside list-[square] space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
				{adplistBadgeTimeline.map((line) => (
					<li key={line}>{line}</li>
				))}
			</ul>
			<p className="mt-8 max-w-2xl text-base text-zinc-600 dark:text-zinc-400">
				Beyond ADPList, I mentor startup founders through MassChallenge
				Switzerland &amp; UK, served as a judge for the 2025 CODiE Awards, and
				spent 11 years teaching 2,000+ students before mentoring had an app.{" "}
				<Link
					href="/awards"
					className="font-medium text-teal-600 transition hover:text-teal-500 dark:text-teal-400"
				>
					All awards &amp; recognition →
				</Link>
			</p>
		</Container>
	);
}
