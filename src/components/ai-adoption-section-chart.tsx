import { DevelopmentLoop } from "@/components/ai-adoption/development-loop";
import { ErrorVolumeChart } from "@/components/ai-adoption/error-volume-chart";
import { FlowHistoryChart } from "@/components/ai-adoption/flow-history-chart";
import { MonthlyActivityChart } from "@/components/ai-adoption/monthly-activity-chart";
import { TestHistoryChart } from "@/components/ai-adoption/test-history-chart";
import type { ArticleSectionData } from "@/data/ai-adoption/sections";

export function AiAdoptionSectionChart({
	kind,
}: Pick<ArticleSectionData, "kind">) {
	if (kind === "activity") return <MonthlyActivityChart />;
	if (kind === "tests") return <TestHistoryChart />;
	if (kind === "flows") return <FlowHistoryChart />;
	if (kind === "errors") return <ErrorVolumeChart />;
	if (kind === "loop") return <DevelopmentLoop />;
	return null;
}
