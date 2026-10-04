import {
	monthlyActivityData,
	monthlyTicketData,
} from "@/data/ai-adoption/metrics";
import { MonthlyBarChart } from "./monthly-bar-chart";

export function MonthlyActivityChart() {
	return (
		<div className="not-prose">
			<MonthlyBarChart data={monthlyActivityData} />
			<MonthlyBarChart data={monthlyTicketData} />
		</div>
	);
}
