"use client";

import type { LanguageLocale } from "@/lib/languages/locale";
import { useIssuesParam } from "@/lib/resume-review/use-issues-param";
import { ResumeScorecard } from "./resume-scorecard";
import { ReviewBuilder } from "./review-builder";
import { scorecardCopy } from "./scorecard-copy";

/**
 * Picks the mode from the URL. With an `issues` param it is the recipient's
 * scorecard; without one it is the reviewer's builder (also the SSR default,
 * so crawlers and no-JS visitors get the full checklist content).
 */
export function ResumeReviewApp({ locale }: { locale: LanguageLocale }) {
	const { ready, hasParam, flagged, name } = useIssuesParam();
	const copy = scorecardCopy(locale);

	if (ready && hasParam) {
		return (
			<ResumeScorecard
				flagged={flagged}
				name={name}
				locale={locale}
				copy={copy}
			/>
		);
	}
	return <ReviewBuilder locale={locale} copy={copy} />;
}
