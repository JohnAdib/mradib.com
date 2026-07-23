import type { JSX } from "react";
import { Pre } from "@/components/syntax-highlighter/pre";

export function SummaryObjective(): JSX.Element {
	return (
		<>
			<h3 id="objective">The resume objective</h3>
			<p>
				In some cases, this section is called the resume objective instead. It
				refers to when you are planning to change your field of work, or you
				have just graduated and do not have much work history, and you mostly
				want to talk about your interests.
			</p>
			<p>A formula for building a resume objective can look like this.</p>
			<ol>
				<li>A skill, education, or certifications related to the job title</li>
				<li>
					Seeking x months or years of a certain kind of experience in a certain
					job title at a certain company
				</li>
				<li>
					To help with the responsibilities you can take on so they get done
					successfully
				</li>
			</ol>

			<p>For example, if you are a student, you can follow this template.</p>
			<Pre language="plaintext">
				Hard-working recent graduate with a B.A. in Graphic Design from New York
				State University seeking new opportunities. 3+ years of practical
				experience working with Adobe Illustrator and Photoshop, creating
				illustrations & designing UX / UI. Looking to grow as a designer, as
				well as perfect my art, at the XYZ Design Studio.
			</Pre>

			<p>
				Or, for example, if you plan to change your job title, you can write it
				like this.
			</p>
			<Pre language="plaintext">
				IT project manager with 5+ years of experience in software development.
				Managed a team of developers to create products for several industries,
				such as FinTech and HR tech. Looking to leverage my experience in
				managing outsourced products as a Product Owner at XYZ.
			</Pre>
		</>
	);
}
