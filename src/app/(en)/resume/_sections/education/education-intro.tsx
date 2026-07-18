import Image from "next/image";
import type { JSX } from "react";
import imgResumeEducationCover from "./_img/resume-education-cover.jpg";

export function EducationIntro(): JSX.Element {
	return (
		<>
			<p>
				This is probably a simple section, but depending on your situation it
				may need a bit of finesse.
			</p>
			<p>
				It is best to first list everything you might include, then move on to
				the tricks that help you stand out.
			</p>
			<figure>
				<Image
					src={imgResumeEducationCover}
					alt="Example of how to write the education section in a resume"
				/>
				<figcaption>
					Example of how to write the education section in a resume
				</figcaption>
			</figure>
		</>
	);
}
