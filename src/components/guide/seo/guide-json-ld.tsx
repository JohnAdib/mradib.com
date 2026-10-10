import { ArticleJsonLD } from "@/components/article/article-json-ld";
import { HowToJsonLd } from "@/components/json-ld/how-to-json-ld";
import type { IGuide } from "@/data/guides/guide-bundle";
import { getOgCard, ogImagePath } from "@/data/og";
import { homepageUrl } from "@/lib/constants/url";

/** Article and HowTo structured data. Breadcrumb and FAQ emit their own. */
export function GuideJsonLd({ guide }: { guide: IGuide }) {
	const { article } = guide;
	// The social card doubles as the Article image: a 1200x630 frame Google accepts.
	const cover = {
		src: ogImagePath(getOgCard(article.pagePath).slug),
		width: 1200,
		height: 630,
	};
	return (
		<>
			<ArticleJsonLD
				headline={article.title}
				name={article.title}
				description={article.description}
				coverImage={cover}
				urlPath={article.pagePath}
				keywords={article.keywords}
				datePublished={article.datePublished}
				dateModified={article.dateModified}
			/>
			<HowToJsonLd
				name={guide.howTo.name}
				description={guide.howTo.description}
				steps={guide.steps.map((step) => ({
					name: step.title,
					text: step.definition,
					url: `${homepageUrl}${article.pagePath}#${step.id}`,
				}))}
			/>
		</>
	);
}
