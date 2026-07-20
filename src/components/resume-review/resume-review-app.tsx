"use client";

import type { LanguageLocale } from "@/lib/languages/locale";
import { useIssuesParam } from "@/lib/resume-review/use-issues-param";
import { ResumeScorecard } from "./resume-scorecard";
import { ReviewBuilder } from "./review-builder";
import { ReviewEmptyState } from "./review-empty-state";
import { scorecardCopy } from "./scorecard-copy";

/**
 * The resume review tool in one of two modes. `builder` is the reviewer's page
 * (/resume/review): grade the items and copy a link. `result` is the candidate
 * page (/resume/checklist): with an `issues` param it is their scorecard,
 * without one a calm empty state that points back to the builder. The empty
 * state is also the SSR default, so first paint and hydration agree.
 */
export function ResumeReviewApp({
	locale,
	mode,
}: {
	locale: LanguageLocale;
	mode: "builder" | "result";
}) {
	const { ready, hasParam, review, name } = useIssuesParam();
	const copy = scorecardCopy(locale);

	if (mode === "builder") {
		return <ReviewBuilder locale={locale} copy={copy} />;
	}

	if (ready && hasParam) {
		return (
			<ResumeScorecard
				review={review}
				name={name}
				locale={locale}
				copy={copy}
			/>
		);
	}
	return <ReviewEmptyState locale={locale} copy={copy} />;
}
