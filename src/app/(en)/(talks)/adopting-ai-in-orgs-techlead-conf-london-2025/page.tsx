import type { Metadata } from "next";
import { TalkLayout } from "@/components/talk/talk-layout";
import { getTalk } from "@/data/talks/get-talk";

const talk = getTalk("techlead-conf-adopting-ai");

export const metadata: Metadata = {
	title: talk.title,
	description: talk.summary,
};

const panelists = [
	"Sam Komesarook",
	"Pablo Ibanez",
	"Fabrice Bernhard",
	"Joao Gaspar Silva",
	"Matheus Guimaraes",
	"Michael Roberg",
	"Bogdana-Elena Avadanei",
];

export default function Page() {
	return (
		<TalkLayout talk={talk}>
			<figure className="mt-8">
				{/* biome-ignore lint/a11y/useMediaCaption: promotional event intro, no caption track available */}
				<video
					controls
					preload="metadata"
					className="w-full rounded-2xl ring-1 ring-zinc-100 dark:ring-zinc-700/50"
				>
					<source
						src="/talks/techlead-conf-london-2025-intro.mp4"
						type="video/mp4"
					/>
				</video>
				<figcaption className="mt-2 text-xs text-zinc-500 dark:text-zinc-400">
					Event intro, TechLead Conf London 2025.
				</figcaption>
			</figure>

			<div className="mt-8 space-y-4 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
				<p>
					This panel opened with a question most teams skip: what does
					"technical debt" actually mean? We spent a genuine half hour on the
					definition alone, because the phrase has quietly become a label for
					anything people dislike about a codebase, and that fuzziness is a big
					reason debt never gets paid down.
				</p>
				<p>
					From there we turned to AI. Used well, it helps teams find, explain,
					and safely refactor debt faster than before. Used carelessly, it
					generates more of it, and faster, when code ships without the
					guardrails, ownership, and review to keep it honest. The throughline:
					AI is leverage on the engineering culture you already have, so the
					fundamentals matter more, not less.
				</p>
			</div>

			<p className="mt-6 text-sm text-zinc-500 dark:text-zinc-400">
				On the panel with {panelists.slice(0, -1).join(", ")}, and{" "}
				{panelists[panelists.length - 1]}.
			</p>
		</TalkLayout>
	);
}
