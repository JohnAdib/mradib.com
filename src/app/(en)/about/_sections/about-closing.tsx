import Link from "next/link";
import { Reveal } from "@/components/reveal/reveal";
import { SocialMediaLinks } from "@/components/social-media-links";
import { urlSocial } from "@/lib/constants/url-social";
import { chapterLinkClass } from "./chapter";

export function AboutClosing() {
	return (
		<Reveal className="mt-20 border-t border-zinc-100 pt-12 dark:border-zinc-800">
			<h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
				Say hello
			</h2>
			<p className="mt-4 max-w-2xl text-base text-zinc-600 dark:text-zinc-400">
				I don't know what the next chapter looks like yet. None of the earlier
				ones were planned either, and they turned out fine.
			</p>
			<p className="mt-4 max-w-2xl text-base text-zinc-600 dark:text-zinc-400">
				Want the formal version?{" "}
				<Link
					href={urlSocial.resume}
					target="_blank"
					className={chapterLinkClass}
				>
					My resume
				</Link>{" "}
				is hand-coded in HTML and CSS, and yes, it exports itself to PDF with a
				pure-JavaScript trick. Everywhere else you can find me is below.
			</p>
			<div className="mt-8">
				<SocialMediaLinks forAboutPage={true} />
			</div>
		</Reveal>
	);
}
