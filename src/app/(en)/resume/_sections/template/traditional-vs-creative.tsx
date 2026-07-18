import Image from "next/image";
import type { JSX } from "react";
import { Accordion } from "@/components/accordion/accordion";
import imgResumeDesignTraditionalVsCreative from "./_img/resume-design-traditional-vs-creative.jpg";
import imgResumeFormatingInfographic from "./_img/resume-formating-infographic.jpg";

export function TraditionalVsCreative(): JSX.Element {
	return (
		<>
			<h3 id="traditional-vs-creative">
				Traditional or creative resume template?
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
				If you are job hunting in more traditional industries such as law,
				banking, and finance, the traditional style seems more suitable.
			</p>
			<p>
				If you want to apply to technology companies, where innovation is
				valued, you might go for a more creative style. Remember, more
				creativity means more risk.
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
