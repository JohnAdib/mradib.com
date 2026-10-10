import { unitTestHistoryData } from "@/data/ai-adoption/metrics";
import { VerticalBarChart } from "./vertical-bar-chart";

export function TestHistoryChart() {
	return <VerticalBarChart data={unitTestHistoryData} snapshotDates />;
}
