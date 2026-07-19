import type { Metadata } from "next";
import { homepageUrl } from "@/lib/constants/url";

/**
 * Redirect stub pages carry no real content, so if Google indexes one it
 * serves a blank page under our own domain. Next's static export of redirect()
 * emits a self canonical and no robots meta, which invites exactly that. This
 * helper marks every stub noindex (follow, so link equity still flows) and, for
 * internal targets, points the canonical at the real destination, not itself.
 * External targets get noindex only: no cross domain canonical.
 */
export function redirectMetadata(target: string): Metadata {
	const isInternal = target.startsWith("/");
	return {
		robots: { index: false, follow: true },
		...(isInternal
			? { alternates: { canonical: `${homepageUrl}${target}` } }
			: {}),
	};
}
