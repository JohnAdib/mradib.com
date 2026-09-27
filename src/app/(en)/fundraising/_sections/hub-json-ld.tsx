import { ItemListJsonLd } from "@/components/json-ld/item-list-json-ld";
import { fundraisingKit } from "@/data/guides/fundraising-kit";
import { hubCopy } from "@/data/guides/hub-copy";
import { homepageUrl } from "@/lib/constants/url";

/** The kit as an ItemList. The breadcrumb emits its own list from the hero. */
export function HubJsonLd() {
	return (
		<ItemListJsonLd
			name={hubCopy.itemListName}
			items={fundraisingKit.map((entry) => ({
				name: entry.article.title,
				url: `${homepageUrl}${entry.article.pagePath}`,
			}))}
		/>
	);
}
