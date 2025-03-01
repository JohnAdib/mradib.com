"use client";

import { RenderChecklist } from "./render";
import type { IChecklistRenderProps } from "./render/i-checklist-render";

export function Checklist({ id, list }: IChecklistRenderProps) {
	if (!id) {
		return null;
	}
	// TODO: Implement logic to handle the checklist

	return <RenderChecklist id={id} list={list} />;
}
