import type { JSX } from "react";
import { Msg } from "@/components/msg/msg";

export function ThingsToAvoid(): JSX.Element {
	return (
		<>
			<h3 id="avoid">What to avoid in the contact section</h3>
			<p>Please make sure you have not put these items on your resume.</p>

			<h4 id="birthdate">Date of birth</h4>
			<p>
				A recruiter or HR does not need to know how old you are. Age is not
				relevant to the decision. Worse, it can lead to age discrimination. If a
				company truly needs it, they will ask for it separately in a form, so do
				not insist on putting it on your resume.
			</p>

			<h4 id="bad-email">Unprofessional email address</h4>
			<p>
				Use a simple email with your first and last name on a common provider
				like Gmail so you never miss a message, for example{" "}
				<code>name.family@gmail.com</code>, and please do not use odd addresses
				like <code>pirate169@mysite.com</code>.
			</p>
			<Msg severity="error">
				Never use a work email from a previous job. It is highly unprofessional.
			</Msg>

			<h4 id="photo">Photo</h4>
			<p>
				A recruiter does not need to know what you look like to evaluate your
				resume, so do not add your photo. It invites a snap judgment. They will
				see you soon enough in the interview or on your LinkedIn profile
				picture.
			</p>
			<Msg severity="warning">
				In the United States and the United Kingdom in particular, because of
				anti discrimination laws, you should not put your photo on your resume.
			</Msg>
			<p>
				This is part of your privacy. Of course, if you want to add a photo, no
				one can stop you, but keep in mind it might cause an automated ATS to
				reject you.
			</p>

			<h4 id="address">Your home address!</h4>
			<p>
				It is strange how often I see a full home address on some resumes. No
				one is going to mail you a letter that they would need it for.
			</p>

			<h4 id="unprofessional">Other unprofessional details</h4>
			<p>
				If you have listed any of the following on your resume, please remove
				them.
			</p>
			<ul>
				<li>Gender</li>
				<li>Military service status</li>
				<li>Marital status</li>
				<li>Number of children</li>
				<li>Physical health status</li>
			</ul>

			<p>
				This all seemed clear. Read this section out loud to yourself once and
				make sure no mistake slipped in.
			</p>
		</>
	);
}
