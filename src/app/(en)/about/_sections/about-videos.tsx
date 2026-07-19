import Link from "next/link";
import { Chapter, chapterLinkClass } from "./chapter";

export function AboutVideos() {
	return (
		<Chapter
			index="06"
			era="2011 to 2017 · Recorded lessons"
			title="Seventeen minutes that went everywhere"
			slug="videos"
		>
			<p>
				On 28 August 2011 I published my first recording:{" "}
				<Link
					href="https://evazzadeh.com/learning-video/table-of-contents/"
					target="_blank"
					rel="noreferrer"
					className={chapterLinkClass}
				>
					seventeen minutes on building a table of contents in Microsoft Word
				</Link>
				, in gloriously bad quality. It did not matter. Everyone was making them
				by hand for a thesis or a book, page by painful page, and I showed the
				automatic way. That one video collected 400 comments on my personal
				website alone.
			</p>
			<p>
				Then came the boom: a full Excel course packed into a two-hour video in
				September 2013, C programming that December, then Ubuntu, WordPress,
				HTML, CSS, PHP, inspect element, and more. Free to download on my
				personal website, shared across Persian social media, sitting on the
				first page of Google for years.
			</p>
			<p>
				The numbers stopped being countable. More than 1.2 million views on one
				platform alone. Thousands of comments and messages. Other learning
				platforms republished my videos without asking, which is its own kind of
				compliment. Somewhere along the way, a generation of Persian speakers
				learned Office and the web from my voice.
			</p>
		</Chapter>
	);
}
