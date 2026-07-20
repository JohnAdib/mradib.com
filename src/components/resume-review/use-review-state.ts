"use client";

import { useEffect, useState } from "react";
import { scoreForReview } from "@/data/resume-checklist";

const NAME_KEY = "resume-review-name";
const REVIEW_KEY = "resume-review-severity";
const CODES = new Set([1, 2, 3, 4]);

function loadReview(): Record<string, number> {
	try {
		const parsed = JSON.parse(localStorage.getItem(REVIEW_KEY) ?? "{}");
		const next: Record<string, number> = {};
		for (const [slug, value] of Object.entries(parsed)) {
			if (typeof value === "number" && CODES.has(value)) {
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
	setGrade: (slug: string, code: number) => void;
	clearAll: () => void;
	score: number;
	flaggedCount: number;
	strengthCount: number;
}

/** The reviewer's working state: candidate name and a per-item grade map, both
 * persisted to localStorage. Grade 0 (good) is the default and never stored. */
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

	function setGrade(slug: string, code: number) {
		setReview((prev) => {
			const next = { ...prev };
			if (code === 0) {
				delete next[slug];
			} else {
				next[slug] = code;
			}
			write(REVIEW_KEY, JSON.stringify(next));
			return next;
		});
	}

	function clearAll() {
		setReview({});
		write(REVIEW_KEY, "{}");
	}

	const values = Object.values(review);
	return {
		name,
		setName,
		review,
		setGrade,
		clearAll,
		score: scoreForReview(review),
		flaggedCount: values.filter((value) => value === 1 || value === 2).length,
		strengthCount: values.filter((value) => value === 3).length,
	};
}
