import type { ItemList, WithContext } from "schema-dts";

interface IItemListJsonLd {
	name: string;
	items: { name: string; url: string }[];
}

export function ItemListJsonLd({ name, items }: IItemListJsonLd): JSX.Element {
	const jsonLd: WithContext<ItemList> = {
		"@context": "https://schema.org",
		"@type": "ItemList",
		name,
		itemListElement: items.map((item, index) => ({
			"@type": "ListItem",
			position: index + 1,
			name: item.name,
			url: item.url,
		})),
	};

	return (
		<script
			type="application/ld+json"
			// biome-ignore lint/security/noDangerouslySetInnerHtml: static, build-time JSON-LD
			dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
		/>
	);
}
