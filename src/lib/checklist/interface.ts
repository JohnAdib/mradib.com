/** Shape persisted to localStorage. Bump `v` to invalidate old payloads. */
export interface IChecklistPersisted {
	v: 1;
	items: Record<string, boolean>;
}

/** Framework-free store returned by `getChecklistStore`. */
export interface IChecklistStore {
	subscribe(callback: () => void): () => void;
	getSnapshot(): Record<string, boolean>;
	toggle(id: string): void;
}

/** Return value of the `useChecklistStore` React hook. */
export interface IUseChecklistStore {
	checked: Record<string, boolean>;
	toggle: (id: string) => void;
	isChecked: (id: string) => boolean;
	countChecked: (ids: string[]) => number;
}
