import Image from "next/image";
import type { JSX } from "react";
import { Accordion } from "@/components/accordion/accordion";
import imgResumeDesignTraditionalVsCreative from "./_img/resume-design-traditional-vs-creative.jpg";
import imgResumeFormatingInfographic from "./_img/resume-formating-infographic.jpg";

export function TraditionalVsCreative(): JSX.Element {
	return (
		<>
			<h3 id="creative">
				<a
					href="#creative"
					className="no-underline text-inherit hover:underline"
				>
					Traditional or creative resume template?
				</a>
			</h3>
			<p>
				Now that we have covered the main points, there is one thing we may need
				to talk about, and that is whether to use traditional templates or
				creative, modern ones. Take a close look at the image below.
			</p>
			<figure>
				<Image
					src={imgResumeDesignTraditionalVsCreative}
					alt="A traditional resume or a creative resume?"
				/>
				<figcaption>A traditional resume or a creative resume?</figcaption>
			</figure>
			<p>
				A creative or visually designed template can make sense when your work
				is about design or visual craft. A designer may want to signal
				creativity and innovation. A bold layout can do that. Even then it is
				optional and up to you.
			</p>
			<p>
				For most other fields, a clean traditional template is the safer choice.
				This is a personal choice that depends on your field and the impression
				you want, not a rule. Remember, more creativity means more risk.
			</p>

			<Accordion title="Infographic on resume layout rules">
				<figure>
					<Image
						src={imgResumeFormatingInfographic}
						alt="Infographic about resume templates"
					/>
					<figcaption>
						Only 7 percent of recruiters favor a creative resume
					</figcaption>
				</figure>
			</Accordion>
		</>
	);
}
