import type { StaticImageData } from "next/image";
import type { JSX } from "react";
import type { Article, WithContext } from "schema-dts";
import { personId } from "@/components/json-ld/person-json-ld";
import { profile } from "@/data/profile";
import { homepageUrl } from "@/lib/constants/url";

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
				"@id": personId,
				name: profile.name,
				alternateName: profile.alternateNames,
				jobTitle: profile.jobTitle,
				url: `${homepageUrl}/about`,
			},
		],
		publisher: {
			"@type": "Person",
			"@id": personId,
			name: profile.name,
			url: homepageUrl,
		},
		url: articleUrl,
		keywords: keywords,
	};

	return (
		<script
			type="application/ld+json"
			// biome-ignore lint/security/noDangerouslySetInnerHtml: static, build-time JSON-LD
			dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
		/>
	);
}
