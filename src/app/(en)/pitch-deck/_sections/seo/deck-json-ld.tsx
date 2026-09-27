import { ArticleJsonLD } from "@/components/article/article-json-ld";
import { HowToJsonLd } from "@/components/json-ld/how-to-json-ld";
import { articlePitchDeck as article } from "@/data/articles/pitch-deck";
import { ogImagePath } from "@/data/og";
import { deckHowTo, pitchSlides } from "@/data/pitch-deck";
import { homepageUrl } from "@/lib/constants/url";

// The social card doubles as the Article image: a 1200x630 frame Google accepts.
const cover = { src: ogImagePath("pitch-deck"), width: 1200, height: 630 };

/** Article and HowTo structured data. Breadcrumb and FAQ emit their own. */
export function DeckJsonLd() {
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
				name={deckHowTo.name}
				description={deckHowTo.description}
				steps={pitchSlides.map((slide) => ({
					name: slide.title,
					text: slide.definition,
					url: `${homepageUrl}${article.pagePath}#${slide.id}`,
				}))}
			/>
		</>
	);
}
