import type { JSX } from "react";
import { Msg } from "@/components/msg/msg";

export function OptionalInfo(): JSX.Element {
	return (
		<>
			<h3 id="extras">
				<a href="#extras" className="no-underline text-inherit hover:underline">
					Optional details in the contact section
				</a>
			</h3>
			<p>
				When you add optional items, make sure they add real value to your
				resume.
			</p>

			<h4 id="linkedin">
				<a
					href="#linkedin"
					className="no-underline text-inherit hover:underline"
				>
					LinkedIn profile
				</a>
			</h4>
			<p>
				If you have an up to date profile that can raise the value of your
				resume, it is a good idea to add it.
			</p>

			<h4 id="social">
				<a href="#social" className="no-underline text-inherit hover:underline">
					Social networks
				</a>
			</h4>
			<p>
				Do you publish your work online? For developers this could be a GitHub
				address, for designers it could be Dribbble, and for writers it could be
				Medium.
			</p>
			<Msg severity="warning">
				Keep in mind that when a link is not relevant and does not help, there
				is no need to include it.
			</Msg>
			<p>
				A Stack Overflow link can be a plus for a developer who is genuinely
				active there, but what is the point when the account is inactive? And
				what use is an Instagram or Twitter link when it is personal and, say,
				in Persian?
			</p>

			<h4 id="website">
				<a
					href="#website"
					className="no-underline text-inherit hover:underline"
				>
					Personal website
				</a>
			</h4>
			<p>
				If you have a personal website or a blog where you write about your
				field, it is good to add it to your resume. Likewise, if you do graphic
				work and have a portfolio, it is good to include the link.
			</p>
		</>
	);
}
