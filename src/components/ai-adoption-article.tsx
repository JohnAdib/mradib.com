import { Fragment } from "react";
import { ArticleToc } from "@/components/toc/article-toc";
import { articleResources } from "@/data/ai-adoption/resources";
import { articleSections } from "@/data/ai-adoption/sections";
import { AiAdoptionResources } from "./ai-adoption-resources";
import { AiAdoptionSectionChart } from "./ai-adoption-section-chart";

export const aiAdoptionToc = [
	...articleSections.map(({ id, title, tocTitle }) => ({
		id,
		title: tocTitle ?? title,
	})),
	{ id: "resources", title: "Resources" },
];

export function AiAdoptionArticle() {
	return (
		<>
			<div className="not-prose my-10 xl:hidden">
				<ArticleToc
					sections={aiAdoptionToc}
					variant="inline"
					label="In this article"
					locale="en-GB"
				/>
			</div>
			{articleSections.map((section) => (
				<section key={section.id} id={section.id} className="scroll-mt-24">
					<h2>{section.title}</h2>
					{section.paragraphs.map((paragraph, index) => (
						<Fragment key={paragraph}>
							<p>{paragraph}</p>
							{index === 0 && <AiAdoptionSectionChart kind={section.kind} />}
						</Fragment>
					))}
					{section.bullets && (
						<ul>
							{section.bullets.map((bullet) => (
								<li key={bullet}>{bullet}</li>
							))}
						</ul>
					)}
					{articleResources
						.filter((resource) => resource.sectionId === section.id)
						.map((resource) => (
							<p key={resource.url} className="text-sm">
								Technique reference: <a href={resource.url}>{resource.title}</a>
							</p>
						))}
				</section>
			))}
			<AiAdoptionResources />
		</>
	);
}
