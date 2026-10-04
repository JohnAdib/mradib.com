import { unitTestHistoryData } from "@/data/ai-adoption/metrics";
import { TimelineChart } from "./timeline-chart";

export function TestHistoryChart() {
	return <TimelineChart data={unitTestHistoryData} />;
}
