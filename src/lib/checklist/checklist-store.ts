import type { IChecklistPersisted, IChecklistStore } from "./interface";

// One frozen empty snapshot shared by every store and the hook's
// getServerSnapshot: a stable reference keeps useSyncExternalStore from looping
// and lets the client's "nothing stored" state match the server render exactly.
export const EMPTY_CHECKED = Object.freeze({}) as Record<string, boolean>;

/** One store per storageKey, so every island sharing a key shares state. */
const stores = new Map<string, IChecklistStore>();

function isPersisted(value: unknown): value is IChecklistPersisted {
	return (
		typeof value === "object" &&
		value !== null &&
		(value as { v?: unknown }).v === 1 &&
		typeof (value as { items?: unknown }).items === "object" &&
		(value as { items?: unknown }).items !== null
	);
}

/** Parse a persisted payload into a snapshot. Invalid/old data → empty. */
function normalize(parsed: unknown): Record<string, boolean> {
	if (!isPersisted(parsed)) {
		return EMPTY_CHECKED;
	}
	const next: Record<string, boolean> = {};
	// Unknown item ids are kept (harmless); values are coerced to real booleans.
	for (const [id, value] of Object.entries(parsed.items)) {
		next[id] = value === true;
	}
	return Object.keys(next).length > 0 ? next : EMPTY_CHECKED;
}

function createStore(storageKey: string): IChecklistStore {
	let snapshot: Record<string, boolean> = EMPTY_CHECKED;
	let loaded = false;
	const subscribers = new Set<() => void>();
	let onStorage: ((event: StorageEvent) => void) | null = null;

	function readFromStorage(): Record<string, boolean> {
		// Guard every access: SSR has no window, Safari private mode throws.
		if (typeof window === "undefined") {
			return EMPTY_CHECKED;
		}
		try {
			const raw = window.localStorage.getItem(storageKey);
			return raw ? normalize(JSON.parse(raw)) : EMPTY_CHECKED;
		} catch {
			return EMPTY_CHECKED;
		}
	}

	/** Lazy-load from localStorage on first client access, exactly once. */
	function ensureLoaded(): void {
		if (!loaded && typeof window !== "undefined") {
			loaded = true;
			snapshot = readFromStorage();
		}
	}

	function persist(): void {
		if (typeof window === "undefined") {
			return;
		}
		try {
			const payload: IChecklistPersisted = { v: 1, items: snapshot };
			window.localStorage.setItem(storageKey, JSON.stringify(payload));
		} catch {
			// Private mode / quota exceeded — keep the in-memory state only.
		}
	}

	function notify(): void {
		for (const callback of subscribers) {
			callback();
		}
	}

	function getSnapshot(): Record<string, boolean> {
		ensureLoaded();
		return snapshot;
	}

	function toggle(id: string): void {
		ensureLoaded();
		snapshot = { ...snapshot, [id]: !snapshot[id] };
		persist();
		notify();
	}

	function subscribe(callback: () => void): () => void {
		subscribers.add(callback);
		// Attach exactly one cross-tab listener while anyone is subscribed.
		if (subscribers.size === 1 && typeof window !== "undefined" && !onStorage) {
			onStorage = (event: StorageEvent) => {
				if (event.key === storageKey) {
					snapshot = readFromStorage();
					notify();
				}
			};
			window.addEventListener("storage", onStorage);
		}
		return () => {
			subscribers.delete(callback);
			if (subscribers.size === 0 && onStorage) {
				window.removeEventListener("storage", onStorage);
				onStorage = null;
			}
		};
	}

	return { subscribe, getSnapshot, toggle };
}

export function getChecklistStore(storageKey: string): IChecklistStore {
	let store = stores.get(storageKey);
	if (!store) {
		store = createStore(storageKey);
		stores.set(storageKey, store);
	}
	return store;
}
