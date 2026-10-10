"use client";

import { useRef } from "react";
import { useShareMotion } from "./use-share-motion";

export function ShareMotion({
	children,
	sharing,
}: {
	children: React.ReactNode;
	sharing: boolean;
}) {
	const background = useRef<HTMLDivElement>(null);
	const card = useRef<HTMLDivElement>(null);
	useShareMotion(background, card);
	return (
		<>
			<div ref={background} className="share-backdrop" aria-hidden="true" />
			<div ref={card} className="share-motion" data-sharing={sharing}>
				{children}
			</div>
		</>
	);
}
