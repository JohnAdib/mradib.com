import type { JSX } from "react";
import { Msg } from "@/components/msg/msg";

export function LengthFitTips(): JSX.Element {
	return (
		<>
			<h3 id="fit">
				<a href="#fit" className="no-underline text-inherit hover:underline">
					How do I fit my resume on one page?
				</a>
			</h3>
			<Msg severity="warning">Let us be realistic. It is hard.</Msg>
			<p>
				When you are just starting out, you try to put everything on your resume
				and it still might not fill a page, because you do not have much
				experience yet. But once you have more experience and more years of work
				behind you, simplifying gets complicated.
			</p>
			<p>
				Let us go through a few techniques together that can get your resume
				down to one page.
			</p>

			<h4 id="relevant">
				<a
					href="#relevant"
					className="no-underline text-inherit hover:underline"
				>
					Focus on relevant information
				</a>
			</h4>
			<p>
				Always remember that only the relevant information mentioned in the job
				posting, the things the employer is looking for, matters. For example,
				if you are applying as a software engineer, your internship experience
				as a social media manager does not matter at all. The employer does not
				need to know that you enjoy yoga, especially if you are short on space.
			</p>

			<h4 id="results">
				<a
					href="#results"
					className="no-underline text-inherit hover:underline"
				>
					Achievements instead of responsibilities
				</a>
			</h4>
			<p>
				Listing responsibilities is pointless. It makes the resume longer, it
				tires the employer out from reading, and it does nothing to set you
				apart. Just from reading your job title, they can roughly tell what your
				responsibilities were. Instead, focus on the concrete metrics that were
				your achievements.
			</p>
			<p>
				Instead of describing your work experience in paragraphs, break it into
				items and use bullet points, meaning put a dot next to each one. Also
				try to keep your sentences short and to the point.
			</p>

			<h4 id="margins">
				<a
					href="#margins"
					className="no-underline text-inherit hover:underline"
				>
					Customize the margins
				</a>
			</h4>
			<p>
				You can always create extra empty space by reducing the page margins.
				Instead of 2.5 cm, you can use a 1 cm margin to gain a lot of empty
				space. The spacing between experience items or bullet points, the
				spacing between sections, and the line height can all be reduced to add
				to your space.
			</p>

			<h4 id="font">
				<a href="#font" className="no-underline text-inherit hover:underline">
					Smaller font
				</a>
			</h4>
			<p>
				Font size 12 is standard for regular text, but that does not mean you
				have to follow it on your resume. You can try 11 or 11.5 to add a lot of
				empty space. Just make sure no one needs to zoom in to read your resume.
			</p>

			<h4 id="header">
				<a href="#header" className="no-underline text-inherit hover:underline">
					Remove unnecessary header space
				</a>
			</h4>
			<p>
				Contact details or the resume summary sometimes take up a lot of space
				because of the design. Optimize the header space.
			</p>
		</>
	);
}
