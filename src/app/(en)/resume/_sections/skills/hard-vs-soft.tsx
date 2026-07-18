import Image from "next/image";
import type { JSX } from "react";
import { Msg } from "@/components/msg/msg";
import { Pre } from "@/components/syntax-highlighter/pre";
import imgResumeHardSkills from "./_img/resume-hard-skills.png";

export function HardVsSoft(): JSX.Element {
	return (
		<>
			<p>
				A required part of every resume is your skills. This is where you list
				all the skills you have to show why you are a good fit for the role.
				Broadly, skills fall into two categories, and a strong resume covers
				both.
			</p>
			<Msg severity="info">
				One important note, remember to list the skills that are relevant to the
				job title.
			</Msg>

			<h3>Hard skills</h3>
			<p>
				A hard skill is measurable. It can be anything from a programming
				language like PHP, to a library like React, to even knowing how to cook
				a great stew.
			</p>
			<p>
				A hard skill usually refers to technical knowledge or training that you
				have practiced and acquired. For a given job, a hard skill is specific
				and essential so that you can meet the demands of that role. As an
				example, the items below are hard skills depending on the job.
			</p>
			<figure>
				<Image src={imgResumeHardSkills} alt="Hard skills for your resume" />
				<figcaption>Hard skills for your resume</figcaption>
			</figure>

			<Pre language="plaintext">
				Machinery skills - operating a road roller, operating a PoS,
				pallet-stacker, forklift, etc.
			</Pre>
			<Pre language="plaintext">
				Software skills - Adobe Creative Suite, Ableton Live Suite
			</Pre>
			<Pre language="plaintext">
				Tools - SEM Marketing, Stethoscope, Google Analytics, Google Search
				Console, ERP systems, CRMs
			</Pre>
			<Pre language="plaintext">
				Coding Languages - JavaScript, PHP, Python, C++, C#, Java, Scala, R
			</Pre>
			<Pre language="plaintext">
				Techniques - Frequency analysis, Crystallization
			</Pre>
			<Pre language="plaintext">Mathematics</Pre>
			<Pre language="plaintext">Accounting & bookkeeping</Pre>

			<h3>Soft skills</h3>
			<p>
				These are personal skills that can be a mix of social skills,
				communication skills, personal traits and qualities, work-related
				attributes, and so on. For example, you can mention skills like
				leadership, critical thinking, management, and communication. Soft
				skills are usually not spelled out in the job description, but they can
				indirectly show that you will fit in with the work environment and the
				company culture.
			</p>
			<Pre language="plaintext">
				Effective communication, Teamwork, Responsibility, Creativity,
				Problem-solving, Leadership, Extroversion, People skills, Openness,
				Adaptability
			</Pre>
		</>
	);
}
