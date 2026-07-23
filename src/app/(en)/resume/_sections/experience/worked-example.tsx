import Image from "next/image";
import type { JSX } from "react";
import imgResumeExperienceExample1 from "./_img/resume-experience-example-1.png";

export function ExperienceWorkedExample(): JSX.Element {
	return (
		<>
			<h3 id="example">Reviewing a work experience example</h3>
			<figure>
				<Image
					src={imgResumeExperienceExample1}
					alt="Work experience on a resume, example 1"
				/>
				<figcaption>
					An example of how to write work experience on a resume
				</figcaption>
			</figure>
		</>
	);
}
