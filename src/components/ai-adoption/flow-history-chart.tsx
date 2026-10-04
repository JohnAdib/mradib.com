import { flowHistoryData } from "@/data/ai-adoption/metrics";
import { TimelineChart } from "./timeline-chart";

export function FlowHistoryChart() {
	return <TimelineChart data={flowHistoryData} />;
}
