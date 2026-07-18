import Image from "next/image";
import imgResumeFormatStructureChronological from "./_img/resume-format-structure-chronological.jpg";
import imgResumeFormatStructureCombination from "./_img/resume-format-structure-combination.jpg";
import imgResumeFormatStructureFunctional from "./_img/resume-format-structure-functional.jpg";

export function StructureCompare(): JSX.Element {
	return (
		<div className="not-prose grid grid-cols-1 gap-4 sm:grid-cols-3">
			<figure className="m-0">
				<Image
					src={imgResumeFormatStructureChronological}
					alt="فرمت رزومه در ساختار معکوس زمانی"
					sizes="(min-width: 640px) 33vw, 100vw"
					className="rounded-lg border border-zinc-200 dark:border-zinc-700/40"
				/>
				<figcaption className="mt-2 text-center text-sm text-zinc-500 dark:text-zinc-400">
					فرمت رزومه زمانی
				</figcaption>
			</figure>
			<figure className="m-0">
				<Image
					src={imgResumeFormatStructureFunctional}
					alt="فرمت رزومه در ساختار کاربری یا مهارت محور"
					sizes="(min-width: 640px) 33vw, 100vw"
					className="rounded-lg border border-zinc-200 dark:border-zinc-700/40"
				/>
				<figcaption className="mt-2 text-center text-sm text-zinc-500 dark:text-zinc-400">
					فرمت رزومه کاربردی
				</figcaption>
			</figure>
			<figure className="m-0">
				<Image
					src={imgResumeFormatStructureCombination}
					alt="فرمت رزومه در ساختار ترکیبی یا رزومه هایبرید"
					sizes="(min-width: 640px) 33vw, 100vw"
					className="rounded-lg border border-zinc-200 dark:border-zinc-700/40"
				/>
				<figcaption className="mt-2 text-center text-sm text-zinc-500 dark:text-zinc-400">
					فرمت رزومه ترکیبی
				</figcaption>
			</figure>
		</div>
	);
}
