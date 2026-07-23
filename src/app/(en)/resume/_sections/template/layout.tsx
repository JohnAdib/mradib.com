import Link from "next/link";
import type { JSX } from "react";
import { Msg } from "@/components/msg/msg";

export function LayoutRules(): JSX.Element {
	return (
		<>
			<h3 id="layout">What is the best layout for a resume?</h3>
			<p>
				The first thing a recruiter notices is the resume's layout. Does it look
				messy and cluttered, or organized and clean? Is it too short or too
				long?
			</p>

			<Msg severity="warning">
				Does your resume shout read me, or does it say move on to the next one?
			</Msg>

			<h4 id="dos">The do's of resume layout and design</h4>
			<p>
				Let's go over a few of the best practices for resume layout together.
			</p>

			<h5 id="one-page">How many pages should a resume be? One page</h5>
			<p>
				If you truly believe you can add significant value, go to two pages. HR
				managers at large companies see more than a thousand resumes a month.
				Rest assured they will not spend their valuable time reading your life
				story. The statistics say you have 6 seconds, or they move on to the
				next one.
			</p>
			<p>
				<Link href="#length">Why do you say a resume should be one page?</Link>
			</p>

			<h5 id="same-layout">Use a consistent design</h5>
			<p>
				Set a specific size for your headings and use it the same way across all
				sections.
			</p>

			<h5 id="white-space">Enough white space</h5>
			<p>Keep it in mind especially in the margins around the page.</p>

			<h5 id="font-family">Choose a readable font</h5>
			<p>
				We recommend choosing a formal, readable font such as Ubuntu, Roboto, or
				Overpass, and never even testing something like Comic Sans. One font is
				certainly enough for a resume, so do not clutter it.
			</p>

			<h5 id="font-size">Choose a suitable font size</h5>
			<p>
				As a general rule, size 11 to 12 for body text and size 14 to 16 for
				headings.
			</p>

			<h5 id="pdf">PDF and nothing else</h5>
			<p>
				You should only use the PDF version. Word and other formats are for you,
				so that you can edit. Everyone else is only going to read. So PDF only.
			</p>

			<h5 id="file-size">Keep the PDF size small</h5>
			<p>
				We strongly recommend never letting your resume file exceed one
				megabyte. If you can, keep it under half a megabyte. If you can, under
				200 kilobytes. Below that gets hard. Images and special fonts can push
				the size unusually high. Some places accept up to 5 megabytes, but when
				you can reduce the size, do it.
			</p>

			<h5 id="file-name">Naming your resume file</h5>
			<p>
				Imagine a recruiter has downloaded your resume file and it is named
				myresume.pdf. Isn't it better to spend a few seconds and fix the file
				name? Your name, a dash, the word resume, and if you like a version
				number so you know which is the latest when you make changes. For
				example, this is how I name mine. Do not forget that a resume is
				different from a CV.
			</p>
			<pre>MrAdib-Resume-v123.pdf</pre>

			<h5 id="consistency">Consistency</h5>
			<p>
				Please stick to one approach. For example, use a fixed format for dates
				in your resume. Do not separate the numbers with a dot one time and a
				slash the next.
			</p>
		</>
	);
}
