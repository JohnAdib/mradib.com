import { useScrollSpy } from "@/components/toc/use-scroll-spy";
import type { IPitchSlide } from "@/data/pitch-deck";

export interface IActiveSlide {
	index: number;
	slide: IPitchSlide;
	prev?: IPitchSlide;
	next?: IPitchSlide;
}

/** The slide the reader is on, from scroll position. Slide 1 before any scroll. */
export function useActiveSlide(slides: IPitchSlide[]): IActiveSlide {
	const activeId = useScrollSpy(slides.map((slide) => slide.id));
	const found = slides.findIndex((slide) => slide.id === activeId);
	const index = found < 0 ? 0 : found;
	return {
		index,
		slide: slides[index],
		prev: slides[index - 1],
		next: slides[index + 1],
	};
}
