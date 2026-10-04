import type { ITimeSeriesData } from "@/data/ai-adoption/chart-types";
import { VerticalBarChart } from "./vertical-bar-chart";

export function MonthlyBarChart({ data }: { data: ITimeSeriesData }) {
	return <VerticalBarChart data={data} />;
}
