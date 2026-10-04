import { errorVolumeData } from "@/data/ai-adoption/visuals";
import { ComparisonChart } from "./comparison-chart";

export function ErrorVolumeChart() {
	return <ComparisonChart data={errorVolumeData} />;
}
