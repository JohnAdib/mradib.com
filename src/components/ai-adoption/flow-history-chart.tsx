import { flowHistoryData } from "@/data/ai-adoption/metrics";
import { VerticalBarChart } from "./vertical-bar-chart";

export function FlowHistoryChart() {
	return <VerticalBarChart data={flowHistoryData} snapshotDates />;
}
