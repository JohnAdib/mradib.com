import Image from "next/image";
import type { JSX } from "react";
import imgResumeContactExample1 from "./_img/resume-contact-example-1.png";
import imgResumeContactExample2 from "./_img/resume-contact-example-2.png";
import imgResumeContactExample3 from "./_img/resume-contact-example-3.png";
import imgResumeContactExample4 from "./_img/resume-contact-example-4.png";
import imgResumeContactExample5 from "./_img/resume-contact-example-5.png";

export function ContactExamples(): JSX.Element {
	return (
		<>
			<h3>Examples of the contact section</h3>
			<p>
				A successful contact section, design aside, can look like the images
				below.
			</p>

			<figure>
				<Image
					src={imgResumeContactExample1}
					alt="Resume contact section, example 1"
				/>
				<figcaption>Example 1</figcaption>
			</figure>

			<figure>
				<Image
					src={imgResumeContactExample2}
					alt="Resume contact section, example 2"
				/>
				<figcaption>Example 2</figcaption>
			</figure>

			<figure>
				<Image
					src={imgResumeContactExample3}
					alt="Resume contact section, example 3"
				/>
				<figcaption>Example 3</figcaption>
			</figure>

			<figure>
				<Image
					src={imgResumeContactExample4}
					alt="Resume contact section, example 4"
				/>
				<figcaption>Example 4</figcaption>
			</figure>

			<figure>
				<Image
					src={imgResumeContactExample5}
					alt="Resume contact section, example 5"
				/>
				<figcaption>Example 5</figcaption>
			</figure>

			<p>
				Check twice, three times, even ten times that you listed everything
				correctly, and more importantly, keep this information up to date.
			</p>
		</>
	);
}
