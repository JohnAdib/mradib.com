import { testGrowthData } from "@/data/ai-adoption/visuals";
import { ComparisonChart } from "./comparison-chart";

export function TestGrowthChart() {
	return <ComparisonChart data={testGrowthData} />;
}
