import type {
	IPitchSlide,
	IReorderRule,
	ISlideLabels,
} from "@/data/pitch-deck";
import { SlideDefinition } from "./slide-definition";
import { SlideDoDont } from "./slide-do-dont";
import { SlideExample } from "./slide-example";
import { SlideHeader } from "./slide-header";
import { SlideNote } from "./slide-note";
import { SlideTest } from "./slide-test";

interface ISlideSectionProps {
	slide: IPitchSlide;
	number: string;
	total: number;
	rule?: IReorderRule;
	labels: ISlideLabels;
}

/** One slide. The parts render in this order; change the anatomy of every slide here. */
export function SlideSection({
	slide,
	number,
	total,
	rule,
	labels,
}: ISlideSectionProps) {
	return (
		<section id={slide.id} className="scroll-mt-24 py-10 sm:py-14">
			<SlideHeader
				id={slide.id}
				number={number}
				total={total}
				title={slide.title}
				question={slide.question}
				labels={labels}
			/>
			<SlideDefinition text={slide.definition} />
			<SlideDoDont
				include={slide.include}
				avoid={slide.avoid}
				labels={labels}
			/>
			<SlideTest label={labels.test} text={slide.test} />
			<SlideExample label={labels.example} text={slide.example} />
			<SlideNote label={labels.note} rule={rule} />
		</section>
	);
}
