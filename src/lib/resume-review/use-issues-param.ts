"use client";

import { useEffect, useState } from "react";
import { decodeIssues } from "@/data/resume-checklist/share";

export interface IIssuesParam {
	/** False until the client has read the URL after mount. */
	ready: boolean;
	/** True when an `issues` param is present (even if empty). */
	hasParam: boolean;
	/** Valid, known slugs from the param, in canonical order. */
	flagged: string[];
	/** The candidate's name from the `name` param, trimmed, or empty. */
	name: string;
}

/**
 * Reads the `?issues=` (and optional `?name=`) params on the client only. The
 * server and first paint return a stable empty result so hydration matches the
 * SSR builder view; the real value arrives right after mount and flips the page
 * into result mode.
 */
export function useIssuesParam(): IIssuesParam {
	const [state, setState] = useState<IIssuesParam>({
		ready: false,
		hasParam: false,
		flagged: [],
		name: "",
	});

	useEffect(() => {
		const params = new URLSearchParams(window.location.search);
		const raw = params.get("issues");
		setState({
			ready: true,
			hasParam: raw !== null,
			flagged: decodeIssues(raw),
			name: (params.get("name") ?? "").trim().slice(0, 40),
		});
	}, []);

	return state;
}
