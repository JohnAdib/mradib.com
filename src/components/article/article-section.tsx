import clsx from "clsx";
import type React from "react";

interface SectionProps {
	id?: string;
	title: string;
	subTitle: string;
	children: React.ReactNode;
}

export function ArticleSection({
	id,
	title,
	subTitle,
	children,
}: SectionProps) {
	const createdId = title
		.toLowerCase()
		.replace(/['?]/g, "")
		.replace(/’/g, "")
		.replace(/\s/g, "-");

	const myId = id || createdId;

	return (
		<section id={myId}>
			<h2
				className={clsx(
					"text-sm md:text-base",
					"mb-0",
					"font-light",
					"text-indigo-600 dark:text-indigo-400",
				)}
			>
				{title}
			</h2>
			<h3>{subTitle}</h3>
			<div>{children}</div>
		</section>
	);
}
