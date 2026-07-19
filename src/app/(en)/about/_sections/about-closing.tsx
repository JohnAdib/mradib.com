import Link from "next/link";
import { CtaOnDarkPanel } from "@/components/cta-on-dark-panel/cta-on-dark-panel";
import { Reveal } from "@/components/reveal/reveal";
import { pageClosings } from "@/data/page-closings";
import { urlSocial } from "@/lib/constants/url-social";
import { chapterLinkClass } from "./chapter";

export function AboutClosing() {
	return (
		<div className="mt-20 border-t border-zinc-900/10 pt-12 dark:border-zinc-800">
			<Reveal>
				<p className="max-w-2xl text-base text-zinc-600 dark:text-zinc-400">
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
					is hand-coded in HTML and CSS, and yes, it exports itself to PDF with
					a pure-JavaScript trick.
				</p>
			</Reveal>
			<CtaOnDarkPanel {...pageClosings.about} />
		</div>
	);
}
