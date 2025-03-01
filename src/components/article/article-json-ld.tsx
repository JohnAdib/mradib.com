import { homepageUrl } from "@/lib/constants/url";
import type { StaticImageData } from "next/image";
import type { Article, WithContext } from "schema-dts";

interface IArticleJSONLD {
	headline: string;
	name: string;
	description: string;
	coverImage: StaticImageData;
	urlPath: string;
	keywords: string[];
	datePublished: string;
	dateModified: string;
}

export function ArticleJsonLD({
	headline,
	name,
	description,
	coverImage,
	urlPath,
	keywords,
	datePublished,
	dateModified,
}: IArticleJSONLD): JSX.Element {
	const articleImg = homepageUrl + coverImage?.src;
	const articleUrl = homepageUrl + urlPath;

	const jsonLd: WithContext<Article> = {
		"@context": "https://schema.org",
		"@type": "Article",
		"@id": `${articleUrl}#article`,
		mainEntityOfPage: articleUrl,
		headline: headline,
		name: name,
		description: description,
		image: articleImg,
		datePublished: datePublished,
		dateModified: dateModified ?? datePublished,
		author: [
			{
				"@type": "Person",
				name: "جان ادیب",
				additionalName: "مستر ادیب",
				alternateName: "جواد ادیب",
				familyName: "ادیب",
				jobTitle: "Senior Software Engineer",
				url: "https://mradib.com/about",
			},
		],
		publisher: {
			"@type": "Person",
			name: "MrAdib",
			alternateName: "مستر ادیب",
			url: "https://mradib.com",
		},
		url: articleUrl,
		keywords: keywords,
	};

	return (
		<script
			type="application/ld+json"
			// biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
			dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
		/>
	);
}
