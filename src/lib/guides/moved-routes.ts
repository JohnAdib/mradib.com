import { movedGuideRoutes } from "@/data/routes/moved-routes";
import { homepageUrl } from "@/lib/constants/url";

/** Static params for the redirect stubs: the old slug of every moved guide. */
export function movedGuideParams(): { guide: string }[] {
	return movedGuideRoutes.map((route) => ({ guide: route.from.slice(1) }));
}

/** The new path for an old slug, or undefined when nothing moved from it. */
export function movedGuideTarget(guide: string): string | undefined {
	return movedGuideRoutes.find((route) => route.from === `/${guide}`)?.to;
}

/** The body served at an old AI file: one line naming where it went. */
export function movedFileText(target: string, file: string): string {
	return `This file moved to ${homepageUrl}${target}/${file}\n`;
}
