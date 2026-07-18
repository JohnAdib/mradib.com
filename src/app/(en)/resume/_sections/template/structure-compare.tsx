import Image from "next/image";
import type { JSX } from "react";
import imgResumeFormatStructureChronological from "./_img/resume-format-structure-chronological.jpg";
import imgResumeFormatStructureCombination from "./_img/resume-format-structure-combination.jpg";
import imgResumeFormatStructureFunctional from "./_img/resume-format-structure-functional.jpg";

export function StructureCompare(): JSX.Element {
	return (
		<div className="not-prose grid grid-cols-1 gap-4 sm:grid-cols-3">
			<figure className="m-0">
				<Image
					src={imgResumeFormatStructureChronological}
					alt="Resume in the reverse chronological structure"
					sizes="(min-width: 640px) 33vw, 100vw"
					className="rounded-lg border border-zinc-200 dark:border-zinc-700/40"
				/>
				<figcaption className="mt-2 text-center text-sm text-zinc-500 dark:text-zinc-400">
					Chronological resume format
				</figcaption>
			</figure>
			<figure className="m-0">
				<Image
					src={imgResumeFormatStructureFunctional}
					alt="Resume in the functional or skills-focused structure"
					sizes="(min-width: 640px) 33vw, 100vw"
					className="rounded-lg border border-zinc-200 dark:border-zinc-700/40"
				/>
				<figcaption className="mt-2 text-center text-sm text-zinc-500 dark:text-zinc-400">
					Functional resume format
				</figcaption>
			</figure>
			<figure className="m-0">
				<Image
					src={imgResumeFormatStructureCombination}
					alt="Resume in the combination or hybrid structure"
					sizes="(min-width: 640px) 33vw, 100vw"
					className="rounded-lg border border-zinc-200 dark:border-zinc-700/40"
				/>
				<figcaption className="mt-2 text-center text-sm text-zinc-500 dark:text-zinc-400">
					Combination resume format
				</figcaption>
			</figure>
		</div>
	);
}
