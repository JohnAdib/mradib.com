import type { Metadata } from "next";
import { Container } from "@/components/container";
import { HowToJsonLd } from "@/components/json-ld/how-to-json-ld";
import { ResumeReviewApp } from "@/components/resume-review/resume-review-app";
import { groupsFor } from "@/data/resume-checklist";
import { homepageUrl } from "@/lib/constants/url";
import { pageAlternates } from "@/lib/i18n/page-alternates";
import { ogMetadata } from "@/lib/og-metadata";

export const metadata: Metadata = {
	title: "Your CV review",
	description:
		"Section by section, every part comes with a clear action you can take. Open it and make your CV stronger.",
	alternates: pageAlternates("/resume/review"),
	...ogMetadata("/resume/review", { title: "Your CV review is ready" }),
};

const howToSteps = groupsFor("en-US").flatMap((group) =>
	group.items.map((item) => ({
		name: item.title,
		text: item.fix,
		url: `${homepageUrl}${group.guideHref}`,
	})),
);

export default function Page() {
	return (
		<Container className="mt-10 pb-16 sm:mt-14">
			<HowToJsonLd
				name="How to improve your resume"
				description="A section by section resume checklist: what to fix and how, scored out of 100."
				steps={howToSteps}
			/>
			<div className="mx-auto max-w-2xl">
				<ResumeReviewApp locale="en-US" mode="result" />
			</div>
		</Container>
	);
}
