import Image from "next/image";
import type { JSX } from "react";
import { Msg } from "@/components/msg/msg";
import imgResumeFormatStructure from "./_img/resume-format-structure.png";
import { StructureCompare } from "./structure-compare";

export function StructureFormats(): JSX.Element {
	return (
		<>
			<Msg severity="success">
				A recruiter scans your resume before they read a word of it{" "}
			</Msg>
			<h3 id="structure">
				<a
					href="#structure"
					className="no-underline text-inherit hover:underline"
				>
					Types of resume structure
				</a>
			</h3>
			<p>
				There are three different resume structures, and you can see them in the
				figure below. They differ in which section they emphasize and how the
				sections are ordered. The difference between these structures is the
				arrangement of the resume's sections. For now we are not concerned at
				all with the graphic design of each section.
			</p>

			<figure>
				<Image src={imgResumeFormatStructure} alt="Types of resume structure" />
				<figcaption>
					From left to right, the reverse chronological format, the functional
					resume, and the combination resume
				</figcaption>
			</figure>
			<Msg severity="info">
				All 3 structures share the 5 core sections of a resume
			</Msg>

			<p>
				We will build each section together in detail. On this page, just focus
				on choosing your own resume structure.
			</p>

			<StructureCompare />

			<h4 id="chronological">
				<a
					href="#chronological"
					className="no-underline text-inherit hover:underline"
				>
					<abbr title="Chronological Resume Format">
						Chronological resume format
					</abbr>
				</a>
			</h4>
			<p>
				This is the most popular work resume format and it is ideal for people
				who have plenty of work experience relevant to the job they are applying
				for. Your most recent job is listed first, and you list the rest going
				back in chronological order.
			</p>
			<p>
				Recruiters know this format inside out and know exactly where to look
				for the information they want.
			</p>

			<p>
				If you have little work history, filling almost half a page with a work
				experience section will be hard, and it may be better to choose one of
				the functional or combination formats.
			</p>

			<h4 id="functional">
				<a
					href="#functional"
					className="no-underline text-inherit hover:underline"
				>
					<abbr title="Functional Resume Format">Functional resume format</abbr>
				</a>
			</h4>
			<p>
				If you are a student, a recent graduate with no work experience, or you
				are looking to change careers, this format may be a better choice for
				you. For example, you might have a long gap in your work history, or you
				might want to try a new line of work after several years.
			</p>
			<p>
				In the functional resume structure, the main emphasis is on your skills,
				and work experience is mentioned briefly.
			</p>

			<h4 id="combination">
				<a
					href="#combination"
					className="no-underline text-inherit hover:underline"
				>
					<abbr title="Combination Resume Format">
						Combination resume format
					</abbr>
				</a>
			</h4>
			<p>
				The combination format is a good choice for people with a diverse set of
				skills. If you are applying for a job that needs expertise across
				several areas, it can work well for you.
			</p>
			<p>
				The combination, or hybrid, resume structure emphasizes work history and
				skills at the same time.
			</p>
		</>
	);
}
