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
				If you have an up-to-date profile that can raise the value of your
				resume, it is a good idea to add it.
			</p>

			<h4 id="social">
				<a href="#social" className="no-underline text-inherit hover:underline">
					Social networks
				</a>
			</h4>
			<p>
				Do you publish your work online? For developers this could be a GitHub
				address, for designers it could be Dribbble.
			</p>
			<Msg severity="warning">
				Keep in mind that when a link is not relevant and does not help, there
				is no need to include it.
			</Msg>
			<p>
				Do not put social media links in a CV. No Instagram, no Twitter or X.
				They add no value. The only links worth including are GitHub, Dribbble,
				or a graphical portfolio website relevant to your work. This holds for
				both Persian and English CVs.
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
			<p>
				The site must be high quality. Linking to a low-quality or unfinished
				site is a negative, not a positive. Only link it if it genuinely
				showcases good work.
			</p>
		</>
	);
}
