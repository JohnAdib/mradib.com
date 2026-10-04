import {
	articleDataDownloads,
	articleResources,
} from "@/data/ai-adoption/resources";

export function AiAdoptionResources() {
	return (
		<section id="resources" className="scroll-mt-24">
			<h2>Resources for putting this into practice</h2>
			<p>
				These official references explain the tools and measurement concepts.
				The observations in the figures are my anonymised aggregate records, not
				results reported by these documentation sources.
			</p>
			<ul>
				{articleResources.map((resource) => (
					<li key={resource.url}>
						<a href={resource.url}>{resource.title}</a>
						<p>{resource.description}</p>
					</li>
				))}
			</ul>
			<h3>Explore the chart data</h3>
			<p>
				These CSV files contain the numeric series behind the charts. The error
				export includes the incomplete first day with an explicit marker; the
				plotted line uses complete days.
			</p>
			<ul>
				{articleDataDownloads.map((resource) => (
					<li key={resource.url}>
						<a href={resource.url} download>
							{resource.title}
						</a>
					</li>
				))}
			</ul>
		</section>
	);
}
