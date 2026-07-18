import type { ITalk } from "./talk-interface";
import { talks } from "./talks";

/** Find a talk by slug — throws at build time if data is missing */
export function getTalk(slug: string): ITalk {
	const talk = talks.find((entry) => entry.slug === slug);
	if (!talk) {
		throw new Error(`Talk not found in src/data/talks: ${slug}`);
	}
	return talk;
}
