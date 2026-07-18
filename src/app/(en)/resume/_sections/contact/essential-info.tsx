import Image from "next/image";
import type { JSX } from "react";
import { Msg } from "@/components/msg/msg";
import imgResumeContactCover from "./_img/resume-contact-cover.jpg";

export function EssentialInfo(): JSX.Element {
	return (
		<>
			<p>
				Imagine you have a wonderful resume that wins over everyone who reads
				it. If the recruiter cannot find a good way to reach you, what was all
				that effort for? Contact information is a vital part of your resume.
			</p>

			<h3>The essentials in the contact section</h3>
			<figure>
				<Image src={imgResumeContactCover} alt="Resume contact section" />
				<figcaption>A summary of the contact details on a resume</figcaption>
			</figure>

			<h4>Full name</h4>
			<p>It sounds simple!</p>
			<Msg severity="warning">
				{" "}
				Just so you know, even if you are a doctor, do not put Dr in front of
				your name.
			</Msg>

			<h4>Job title</h4>
			<p>
				Your professional title can be your current role or the job you are
				aiming for. For example, Full Stack Developer or Android Developer. One
				important point here: skip strange titles like ninja or samurai. Try to
				keep it under four words.
			</p>
			<Msg severity="success">
				The best case is when your job title matches the title in the job
				posting.
			</Msg>

			<h4>Email address</h4>
			<p>Very important. Almost everything happens through this email.</p>

			<h4>Phone number</h4>
			<p>In rare cases they might call you directly.</p>

			<h4>Location</h4>
			<p>
				This means your current city and country, so the company can tell
				whether you would need to relocate.
			</p>
			<Msg severity="error">
				There is no need at all to include address details like your street or
				house number.
			</Msg>
		</>
	);
}
