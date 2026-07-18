import Image from "next/image";
import Link from "next/link";
import type { JSX } from "react";
import { Msg } from "@/components/msg/msg";
import imgResumeFormatStructureExample from "./_img/resume-format-structure-example.jpg";

export function BuildingSoftware(): JSX.Element {
	return (
		<>
			<h3 id="choose-software">
				Choosing the right software or service to build your resume
			</h3>
			<p>
				After choosing a structure and before you start writing your resume, you
				need to decide which tool you want to build it with. There are many ways
				to build a resume, from Microsoft Word and other text editors, to sites
				built for creating resumes, to Overleaf and HTML and CSS.
			</p>
			<p>
				It makes no difference whether you want to build a Persian or an English
				resume. Either way you need to choose the right software for building
				your academic or work resume. Plenty of sample work resumes are
				available through the links below.
			</p>
			<Msg severity="info">
				Building a resume is free. Pick a blank resume file and then download
				the resume form.
			</Msg>
			<p>
				If you prefer to use Microsoft Word, you can visit the address below,
				download a free Word template, and edit it offline on your own machine.
				View a blank resume file and a sample resume in Word format through the
				link below, and pick one to download the blank resume.
			</p>

			<ul dir="ltr">
				<li>
					<Link href="https://templates.office.com/en-us/resume-templates">
						https://templates.office.com/en-us/resume-templates
					</Link>
				</li>
			</ul>

			<p>
				If you prefer to use Overleaf, the link below is a standard resume
				template and comes recommended.
			</p>

			<ul dir="ltr">
				<li>
					<Link href="https://www.overleaf.com/latex/templates/tagged/cv">
						https://www.overleaf.com/latex/templates/tagged/cv
					</Link>
				</li>
				<li>
					<Link href="https://www.overleaf.com/latex/templates/data-science-tech-resume-template/zcdmpfxrzjhv">
						https://www.overleaf.com/latex/templates/data-science-tech-resume-template/zcdmpfxrzjhv
					</Link>
				</li>
			</ul>

			<p>
				Plain text editors are very popular, but the problem is that you can
				lose hours on the design. You make one small change and boom, the whole
				resume falls apart and you have to spend a lot of time fixing it. This
				is exactly the pitch that resume builder sites make when they claim they
				can build your resume fast. You have plenty of options for building a
				resume online with a free online resume builder, some of them even in
				Persian.{" "}
			</p>

			<figure>
				<Image
					src={imgResumeFormatStructureExample}
					alt="Comparison of the different resume structures"
				/>
				<figcaption>A sample of the different resume structures</figcaption>
			</figure>

			<Msg severity="info">
				Either way, the decision is yours and it depends on your skills.
			</Msg>
		</>
	);
}
