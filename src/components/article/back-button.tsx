"use client";

import { ArrowLeftIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { AppContext } from "@/app/providers";
import { ArrowRightIcon } from "../icon/arrow-right";

export function ArticleBackButton() {
	const router = useRouter();
	const { previousPathname } = useContext(AppContext);
	if (!previousPathname) return null;

	return (
		<button
			type="button"
			onClick={() => router.back()}
			aria-label="Go back to the previous page"
			className={clsx(
				"backBtn",
				"group mb-4",
				"flex items-center justify-center h-10 w-10",
				"rounded-full",
				"bg-surface",
				"transition",
				"shadow-md shadow-zinc-800/5",
				"ring-1 ring-zinc-900/5",
				"lg:absolute",
				"lg:rtl:-right-5",
				"lg:-left-5",
				"lg:-mt-2 lg:mb-0",
				"xl:-top-1.5 xl:right-0 xl:mt-0",
				"dark:border dark:border-zinc-700/50 dark:bg-zinc-800 ",
				"dark:ring-0 dark:ring-white/10 dark:hover:border-zinc-700 dark:hover:ring-white/20",
				"select-none",
			)}
		>
			<ArrowRightIcon className="ltr:hidden h-4 w-4 stroke-zinc-500 transition group-hover:stroke-zinc-700 dark:stroke-zinc-500 dark:group-hover:stroke-zinc-400" />
			<ArrowLeftIcon className="rtl:hidden h-4 w-4 stroke-zinc-500 transition group-hover:stroke-zinc-700 dark:stroke-zinc-500 dark:group-hover:stroke-zinc-400" />
		</button>
	);
}
