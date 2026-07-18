"use client";

import { useSyncExternalStore } from "react";
import { EMPTY_CHECKED, getChecklistStore } from "./checklist-store";
import type { IUseChecklistStore } from "./interface";

/** Server + hydration render all-unchecked from one stable frozen object. */
function getServerSnapshot(): Record<string, boolean> {
	return EMPTY_CHECKED;
}

export function useChecklistStore(storageKey: string): IUseChecklistStore {
	const store = getChecklistStore(storageKey);
	const checked = useSyncExternalStore(
		store.subscribe,
		store.getSnapshot,
		getServerSnapshot,
	);

	// Derived from the stable `checked` snapshot, so both are safe during render.
	function isChecked(id: string): boolean {
		return checked[id] === true;
	}

	function countChecked(ids: string[]): number {
		let count = 0;
		for (const id of ids) {
			if (checked[id] === true) {
				count += 1;
			}
		}
		return count;
	}

	return { checked, toggle: store.toggle, isChecked, countChecked };
}
