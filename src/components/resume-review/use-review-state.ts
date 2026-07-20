"use client";

import { useEffect, useState } from "react";
import { scoreForReview } from "@/data/resume-checklist";

const NAME_KEY = "resume-review-name";
const REVIEW_KEY = "resume-review-severity";

function loadReview(): Record<string, number> {
	try {
		const parsed = JSON.parse(localStorage.getItem(REVIEW_KEY) ?? "{}");
		const next: Record<string, number> = {};
		for (const [slug, value] of Object.entries(parsed)) {
			if (value === 1 || value === 2) {
				next[slug] = value;
			}
		}
		return next;
	} catch {
		return {};
	}
}

export interface IReviewState {
	name: string;
	setName: (value: string) => void;
	review: Record<string, number>;
	cycle: (slug: string) => void;
	clearAll: () => void;
	score: number;
	flaggedCount: number;
}

/** The reviewer's working state: the candidate name and a per-item severity map,
 * both persisted to localStorage. Tapping an item cycles good, some issue, problem. */
export function useReviewState(): IReviewState {
	const [name, setNameState] = useState("");
	const [review, setReview] = useState<Record<string, number>>({});

	useEffect(() => {
		try {
			setNameState(localStorage.getItem(NAME_KEY) ?? "");
		} catch {
			// Private mode can throw on read; leave the name empty.
		}
		setReview(loadReview());
	}, []);

	function write(key: string, value: string) {
		try {
			localStorage.setItem(key, value);
		} catch {
			// Ignore quota / private-mode write failures.
		}
	}

	function setName(value: string) {
		const next = value.slice(0, 40);
		setNameState(next);
		write(NAME_KEY, next);
	}

	function cycle(slug: string) {
		setReview((prev) => {
			const next = { ...prev };
			const stepped = ((next[slug] ?? 0) + 1) % 3;
			if (stepped === 0) {
				delete next[slug];
			} else {
				next[slug] = stepped;
			}
			write(REVIEW_KEY, JSON.stringify(next));
			return next;
		});
	}

	function clearAll() {
		setReview({});
		write(REVIEW_KEY, "{}");
	}

	return {
		name,
		setName,
		review,
		cycle,
		clearAll,
		score: scoreForReview(review),
		flaggedCount: Object.keys(review).length,
	};
}
