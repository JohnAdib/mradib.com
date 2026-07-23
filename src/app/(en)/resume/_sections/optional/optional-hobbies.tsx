import Image from "next/image";
import type { JSX } from "react";
import imgResumeOptionalHobbies from "./_img/resume-optional-hobbies.png";

export function OptionalHobbies(): JSX.Element {
	return (
		<>
			<h3 id="hobbies">
				<a
					href="#hobbies"
					className="no-underline text-inherit hover:underline"
				>
					Hobbies and interests
				</a>
			</h3>
			<p>
				A little spice? This section may not be the most important one, but it
				can still help you show a bit of your personality. Maybe the recruiter
				shares a hobby with you and warms to you because of it. If you still
				have empty space on your resume, it is worth filling it with this
				section.
			</p>

			<figure>
				<Image
					src={imgResumeOptionalHobbies}
					alt="Fill the empty space with your hobbies and interests!"
				/>
				<figcaption>
					Fill the empty space with your hobbies and interests!
				</figcaption>
			</figure>
		</>
	);
}
