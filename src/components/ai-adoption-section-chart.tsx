import { CategoricalBarChart } from "@/components/ai-adoption/categorical-bar-chart";
import { DevelopmentLoop } from "@/components/ai-adoption/development-loop";
import { ErrorVolumeChart } from "@/components/ai-adoption/error-volume-chart";
import { FlowHistoryChart } from "@/components/ai-adoption/flow-history-chart";
import { MonthlyBarChart } from "@/components/ai-adoption/monthly-bar-chart";
import { SkillSetFigure } from "@/components/ai-adoption/skill-set-figure";
import { TestHistoryChart } from "@/components/ai-adoption/test-history-chart";
import { TimelineChart } from "@/components/ai-adoption/timeline-chart";
import { deliveryHistoryData } from "@/data/ai-adoption/delivery-history-metrics";
import {
	monthlyActivityData,
	monthlyTicketData,
} from "@/data/ai-adoption/metrics";
import {
	ciOutcomesData,
	designVerificationData,
	flowCompositionData,
	platformJobsData,
	reviewActivityData,
} from "@/data/ai-adoption/operational-metrics";
import type { ArticleSectionData } from "@/data/ai-adoption/sections";

export function AiAdoptionSectionChart({
	kind,
	paragraphIndex,
}: Pick<ArticleSectionData, "kind"> & { paragraphIndex: number }) {
	if (kind === "activity") {
		if (paragraphIndex === 0)
			return <TimelineChart data={deliveryHistoryData} />;
		if (paragraphIndex === 1)
			return <MonthlyBarChart data={monthlyActivityData} />;
		if (paragraphIndex === 2)
			return <MonthlyBarChart data={monthlyTicketData} />;
	}
	if (paragraphIndex !== 0) return null;
	if (kind === "skills") return <SkillSetFigure />;
	if (kind === "tests") return <TestHistoryChart />;
	if (kind === "flows") return <FlowHistoryChart />;
	if (kind === "errors") return <ErrorVolumeChart />;
	if (kind === "loop") return <DevelopmentLoop />;
	if (kind === "ci") return <CategoricalBarChart data={ciOutcomesData} />;
	if (kind === "review")
		return <CategoricalBarChart data={reviewActivityData} />;
	if (kind === "platforms")
		return <CategoricalBarChart data={platformJobsData} />;
	if (kind === "flow-composition")
		return <CategoricalBarChart data={flowCompositionData} />;
	if (kind === "design")
		return <CategoricalBarChart data={designVerificationData} />;
	return null;
}
