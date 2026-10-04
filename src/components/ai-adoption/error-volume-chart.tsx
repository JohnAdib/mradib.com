import { errorHistoryData } from "@/data/ai-adoption/metrics";
import { ErrorWindowSummary } from "./error-window-summary";
import { TimelineChart } from "./timeline-chart";

export function ErrorVolumeChart() {
	return (
		<TimelineChart data={errorHistoryData}>
			<ErrorWindowSummary />
		</TimelineChart>
	);
}
