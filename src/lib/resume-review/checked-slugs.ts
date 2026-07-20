/** The slugs set to true in a checklist store snapshot, as a Set. */
export function checkedSlugs(checked: Record<string, boolean>): Set<string> {
	const set = new Set<string>();
	for (const slug of Object.keys(checked)) {
		if (checked[slug]) {
			set.add(slug);
		}
	}
	return set;
}
