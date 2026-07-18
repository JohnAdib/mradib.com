"use client";

import { useRef } from "react";
import { useVideoAutoplayOnView } from "./use-video-autoplay-on-view";

/** Decorative, muted background loop. Never a click-to-play element. */
export function TalkHeroVideo({
	src,
	poster,
}: {
	src: string;
	poster?: string;
}) {
	const videoRef = useRef<HTMLVideoElement>(null);
	useVideoAutoplayOnView(videoRef);

	return (
		<video
			ref={videoRef}
			aria-hidden="true"
			tabIndex={-1}
			muted
			loop
			playsInline
			autoPlay
			preload="auto"
			poster={poster}
			className="absolute inset-0 h-full w-full object-cover"
		>
			<source src={src} type="video/mp4" />
		</video>
	);
}
