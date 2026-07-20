import type { Metadata } from "next";
import { Container } from "@/components/container";
import { HowToJsonLd } from "@/components/json-ld/how-to-json-ld";
import { ResumeReviewApp } from "@/components/resume-review/resume-review-app";
import { groupsFor } from "@/data/resume-checklist";
import { separator } from "@/lib/constants/en";
import { myNameFa } from "@/lib/constants/fa";
import { homepageUrl } from "@/lib/constants/url";
import { pageAlternates } from "@/lib/i18n/page-alternates";
import { ogMetadata } from "@/lib/og-metadata";

const pageDesc =
	"به رزومه هر کسی از ۱۰۰ نمره بده، مشکل هر بخش رو با راه‌حلش علامت بزن، و نتیجه رو با یک لینک بفرست.";

export const metadata: Metadata = {
	title: "بررسی رزومه",
	description: pageDesc + separator + myNameFa,
	alternates: pageAlternates("/fa/resume/review"),
	...ogMetadata("/fa/resume/review"),
};

const howToSteps = groupsFor("fa-IR").flatMap((group) =>
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
				name="چطور رزومه‌ات را بهتر کنی"
				description="چک‌لیست بخش‌به‌بخش رزومه: چه چیزی را درست کنی و چطور، با امتیاز از ۱۰۰."
				steps={howToSteps}
			/>
			<div className="mx-auto max-w-2xl">
				<ResumeReviewApp locale="fa-IR" mode="builder" />
			</div>
		</Container>
	);
}
