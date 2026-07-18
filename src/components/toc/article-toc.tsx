"use client";

import type { JSX } from "react";
import { Accordion } from "@/components/accordion/accordion";
import { useChecklistStore } from "@/lib/checklist/use-checklist-store";
import type { IArticleTocProps, ITocSection } from "./interface";
import { TocRow } from "./toc-row";
import { useScrollSpy } from "./use-scroll-spy";

/**
 * Rows wired to the checklist store. Rendered as a separate component so the
 * store hook only runs when a `storageKey` actually exists — never for a plain,
 * checklist-less TOC.
 */
function ChecklistRows({
	sections,
	activeId,
	storageKey,
	checklistIdsBySection,
	showNumber,
	locale,
}: {
	sections: ITocSection[];
	activeId: string | null;
	storageKey: string;
	checklistIdsBySection: Record<string, string[]>;
	showNumber: boolean;
	locale: string;
}): React.ReactNode {
	const store = useChecklistStore(storageKey);

	return sections.map((section, index) => {
		const ids = checklistIdsBySection[section.id];
		const progress =
			ids !== undefined && ids.length > 0
				? { done: store.countChecked(ids), total: ids.length }
				: undefined;

		return (
			<li key={section.id}>
				<TocRow
					id={section.id}
					title={section.title}
					index={index}
					showNumber={showNumber}
					active={activeId === section.id}
					progress={progress}
					locale={locale}
				/>
			</li>
		);
	});
}

export function ArticleToc({
	sections,
	variant,
	storageKey,
	checklistIdsBySection,
	label = "فهرست مطالب",
	locale = "fa-IR",
}: IArticleTocProps): JSX.Element {
	const activeId = useScrollSpy(sections.map((section) => section.id));
	const showNumber = variant === "inline";

	const rows =
		storageKey !== undefined && checklistIdsBySection !== undefined ? (
			<ChecklistRows
				sections={sections}
				activeId={activeId}
				storageKey={storageKey}
				checklistIdsBySection={checklistIdsBySection}
				showNumber={showNumber}
				locale={locale}
			/>
		) : (
			sections.map((section, index) => (
				<li key={section.id}>
					<TocRow
						id={section.id}
						title={section.title}
						index={index}
						showNumber={showNumber}
						active={activeId === section.id}
						locale={locale}
					/>
				</li>
			))
		);

	const list = (
		<nav aria-label={label} className="not-prose">
			<ul className="m-0 flex list-none flex-col gap-0.5 ps-0">{rows}</ul>
		</nav>
	);

	if (variant === "inline") {
		return (
			<Accordion title={label} defaultOpen>
				{list}
			</Accordion>
		);
	}

	return list;
}
