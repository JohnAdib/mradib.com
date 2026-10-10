"use client";

import { useEffect, useRef, useState } from "react";
import { drawScene } from "./scene-art";
import { chapters } from "./story-data";
import "./pixel-story.css";

export function PixelStory() {
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const [chapter, setChapter] = useState(0);
	const [paused, setPaused] = useState(false);
	const [reducedMotion, setReducedMotion] = useState(false);

	useEffect(() => {
		const media = window.matchMedia("(prefers-reduced-motion: reduce)");
		const sync = () => setReducedMotion(media.matches);
		sync();
		media.addEventListener("change", sync);
		return () => media.removeEventListener("change", sync);
	}, []);

	useEffect(() => {
		const canvas = canvasRef.current;
		const context = canvas?.getContext("2d", { alpha: false });
		if (!context) return;
		let frame = 0;
		let animation = 0;
		let lastDraw = 0;
		const animate = (time: number) => {
			if (time - lastDraw > 65) {
				drawScene(context, chapter, frame, reducedMotion);
				if (!paused && !reducedMotion) frame++;
				lastDraw = time;
			}
			animation = requestAnimationFrame(animate);
		};
		animation = requestAnimationFrame(animate);
		return () => cancelAnimationFrame(animation);
	}, [chapter, paused, reducedMotion]);

	const next = () => setChapter((current) => (current + 1) % chapters.length);
	const previous = () =>
		setChapter((current) => (current + chapters.length - 1) % chapters.length);

	return (
		<div className="pixel-story-page">
			<div className="pixel-story-shell">
				<header className="pixel-story-heading">
					<p className="pixel-story-eyebrow">
						A LITTLE INTERACTIVE STORY / EXPERIMENT 001
					</p>
					<h1>One move at a time</h1>
					<p>
						A city. A character. A handful of chances. A tiny story told in
						pixels.
					</p>
				</header>
				<div className="pixel-story-machine">
					<div className="pixel-story-topbar">
						<span>MRADIB / PIXEL LAB</span>
						<span>LEVEL {chapters[chapter].number} OF 03</span>
						<span className="pixel-story-live">● LIVE SCENE</span>
					</div>
					<div
						className={`pixel-story-screen pixel-story-${chapters[chapter].color}`}
					>
						<canvas
							ref={canvasRef}
							width="320"
							height="180"
							aria-label="Animated pixel art of a person in London, Tower Bridge, a clock tower, and falling coins"
							role="img"
						/>
						<div className="pixel-story-screen-label" aria-hidden="true">
							<span>STORY MODE</span>
							<span>● {chapters[chapter].label}</span>
						</div>
					</div>
					<div className="pixel-story-console">
						<div className="pixel-story-caption">
							<span>
								CHAPTER {chapters[chapter].number} / {chapters[chapter].label}
							</span>
							<p data-scene-caption aria-live="polite">
								{chapters[chapter].caption}
							</p>
						</div>
						<div className="pixel-story-controls">
							<button
								type="button"
								onClick={previous}
								aria-label="Previous chapter"
							>
								←
							</button>
							<button type="button" onClick={next} aria-label="Next chapter">
								NEXT →
							</button>
							{!reducedMotion && (
								<button
									type="button"
									onClick={() => setPaused((value) => !value)}
									aria-label={paused ? "Play animation" : "Pause animation"}
								>
									{paused ? "PLAY" : "PAUSE"}
								</button>
							)}
						</div>
					</div>
				</div>
				<p className="pixel-story-footnote">
					Use the arrows to move through the story. The scene pauses
					automatically when your device requests less motion.
				</p>
			</div>
		</div>
	);
}
