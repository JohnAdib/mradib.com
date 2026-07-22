"use client";

import { useEffect } from "react";
import type { LanguageLocale } from "@/lib/languages/locale";
import { resultPath } from "@/lib/resume-review/share-url";
import { useIssuesParam } from "@/lib/resume-review/use-issues-param";
import { ResumeScorecard } from "./resume-scorecard";
import { ReviewBuilder } from "./review-builder";
import { ReviewEmptyState } from "./review-empty-state";
import { scorecardCopy } from "./scorecard-copy";

/**
 * The resume review tool in one of two modes. `builder` is the reviewer's tool
 * (/resume/checklist): grade the items and copy a link. `result` is the review
 * a candidate receives (/resume/review): with an `issues` param it is their
 * scorecard, without one a calm empty state that points to the tool. The empty
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

	// Earlier links carried a review under the tool URL. If one opens the tool
	// with an `issues` param, forward it to the result page so it still renders.
	useEffect(() => {
		if (mode === "builder" && ready && hasParam) {
			window.location.replace(`${resultPath(locale)}${window.location.search}`);
		}
	}, [mode, ready, hasParam, locale]);

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
