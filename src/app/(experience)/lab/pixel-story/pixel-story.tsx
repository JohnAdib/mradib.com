"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
	type GameInput,
	initialGameState,
	type Pose,
	stepGame,
} from "./game-state";
import { drawScene } from "./scene-art";
import { chapters } from "./story-data";
import "./pixel-story.css";

export function PixelStory() {
	const stageRef = useRef<HTMLElement>(null);
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const game = useRef(initialGameState());
	const poseRef = useRef<Pose>("standing");
	const input = useRef<GameInput>({
		left: false,
		right: false,
		crouch: false,
		jump: false,
	});
	const timeRef = useRef(0);
	const [chapter, setChapter] = useState(0);
	const [pose, setPose] = useState<Pose>("standing");
	const [paused, setPaused] = useState(false);
	const [reducedMotion, setReducedMotion] = useState(false);
	const [fullscreen, setFullscreen] = useState(false);
	const [canFullscreen, setCanFullscreen] = useState(false);

	useEffect(() => {
		const media = window.matchMedia("(prefers-reduced-motion: reduce)");
		const sync = () => setReducedMotion(media.matches);
		sync();
		media.addEventListener("change", sync);
		return () => media.removeEventListener("change", sync);
	}, []);

	useEffect(() => {
		const onKeyDown = (event: KeyboardEvent) => {
			if (
				!["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", " "].includes(
					event.key,
				)
			)
				return;
			event.preventDefault();
			if (event.key === "ArrowLeft") input.current.left = true;
			if (event.key === "ArrowRight") input.current.right = true;
			if (event.key === "ArrowDown") input.current.crouch = true;
			if ((event.key === "ArrowUp" || event.key === " ") && !event.repeat)
				input.current.jump = true;
		};
		const onKeyUp = (event: KeyboardEvent) => {
			if (event.key === "ArrowLeft") input.current.left = false;
			if (event.key === "ArrowRight") input.current.right = false;
			if (event.key === "ArrowDown") input.current.crouch = false;
		};
		const clear = () => {
			input.current.left = false;
			input.current.right = false;
			input.current.crouch = false;
		};
		window.addEventListener("keydown", onKeyDown);
		window.addEventListener("keyup", onKeyUp);
		window.addEventListener("blur", clear);
		return () => {
			window.removeEventListener("keydown", onKeyDown);
			window.removeEventListener("keyup", onKeyUp);
			window.removeEventListener("blur", clear);
		};
	}, []);

	useEffect(() => {
		const canvas = canvasRef.current;
		const stage = stageRef.current;
		const ctx = canvas?.getContext("2d", { alpha: false });
		if (!canvas || !stage || !ctx) return;
		const resize = () => {
			const pixelSize = stage.clientWidth < 600 ? 3 : 4;
			canvas.width = Math.ceil(stage.clientWidth / pixelSize);
			canvas.height = Math.ceil(stage.clientHeight / pixelSize);
		};
		const observer = new ResizeObserver(resize);
		observer.observe(stage);
		resize();
		let request = 0;
		let last = 0;
		let lastDraw = 0;
		const tick = (now: number) => {
			const delta = last ? Math.min((now - last) / 1000, 0.05) : 0;
			last = now;
			if (delta > 0) stepGame(game.current, input.current, delta);
			if (game.current.pose !== poseRef.current) {
				poseRef.current = game.current.pose;
				setPose(game.current.pose);
			}
			if (now - lastDraw >= 33) {
				if (!paused && !reducedMotion) timeRef.current += delta;
				const camera = drawScene(ctx, {
					chapter,
					time: timeRef.current,
					player: game.current,
					reducedMotion: paused || reducedMotion,
				});
				canvas.dataset.playerX = game.current.x.toFixed(1);
				canvas.dataset.cameraX = camera.toFixed(1);
				lastDraw = now;
			}
			request = requestAnimationFrame(tick);
		};
		request = requestAnimationFrame(tick);
		return () => {
			cancelAnimationFrame(request);
			observer.disconnect();
		};
	}, [chapter, paused, reducedMotion]);

	useEffect(() => {
		setCanFullscreen(
			Boolean(
				stageRef.current?.requestFullscreen && document.fullscreenEnabled,
			),
		);
		const sync = () =>
			setFullscreen(document.fullscreenElement === stageRef.current);
		document.addEventListener("fullscreenchange", sync);
		return () => document.removeEventListener("fullscreenchange", sync);
	}, []);

	const toggleFullscreen = async () => {
		if (document.fullscreenElement) await document.exitFullscreen();
		else await stageRef.current?.requestFullscreen?.();
	};
	const hold = (direction: "left" | "right" | "crouch", active: boolean) => {
		input.current[direction] = active;
	};
	const next = () => setChapter((value) => (value + 1) % chapters.length);
	const previous = () =>
		setChapter((value) => (value + chapters.length - 1) % chapters.length);

	return (
		<main ref={stageRef} className="pixel-story" data-pixel-story>
			<canvas
				ref={canvasRef}
				className="pixel-story-canvas"
				role="img"
				aria-label="Playable pixel art London scene with Tower Bridge, Elizabeth Tower, a person, and falling pound coins"
			/>
			<div className="pixel-story-shade" aria-hidden="true" />
			<header className="pixel-story-hud">
				<Link href="/" className="pixel-story-back">
					← JOHN ADIB
				</Link>
				<span className="pixel-story-level">
					LEVEL {chapters[chapter].number} / 03
				</span>
				{canFullscreen ? (
					<button
						type="button"
						onClick={toggleFullscreen}
						aria-label={fullscreen ? "Exit full screen" : "Enter full screen"}
						className="pixel-story-icon-button"
					>
						{fullscreen ? "↙" : "⛶"}
					</button>
				) : (
					<span className="pixel-story-icon-placeholder" aria-hidden="true" />
				)}
			</header>
			<div className="pixel-story-intro">
				<p className="pixel-story-kicker">PIXEL STORY / LONDON</p>
				<h1>
					One move
					<br />
					at a time<span>.</span>
				</h1>
				<p data-scene-caption aria-live="polite">
					{chapters[chapter].caption}
				</p>
			</div>
			<div className="pixel-story-status">
				<span>
					CHAPTER {chapters[chapter].number} / {chapters[chapter].label}
				</span>
				<output data-testid={`player-pose-${pose}`} aria-live="off">
					{pose.toUpperCase()}
				</output>
			</div>
			<div className="pixel-story-bottom">
				<fieldset className="pixel-story-game-controls">
					<legend className="sr-only">Character controls</legend>
					<button
						type="button"
						aria-label="Move left"
						onPointerDown={() => hold("left", true)}
						onPointerUp={() => hold("left", false)}
						onPointerCancel={() => hold("left", false)}
						onPointerLeave={() => hold("left", false)}
					>
						←
					</button>
					<button
						type="button"
						aria-label="Move right"
						onPointerDown={() => hold("right", true)}
						onPointerUp={() => hold("right", false)}
						onPointerCancel={() => hold("right", false)}
						onPointerLeave={() => hold("right", false)}
					>
						→
					</button>
					<button
						type="button"
						aria-label="Jump"
						onClick={() => {
							input.current.jump = true;
						}}
					>
						↑ <span>JUMP</span>
					</button>
					<button
						type="button"
						aria-label="Crouch"
						onPointerDown={() => hold("crouch", true)}
						onPointerUp={() => hold("crouch", false)}
						onPointerCancel={() => hold("crouch", false)}
						onPointerLeave={() => hold("crouch", false)}
					>
						↓ <span>DUCK</span>
					</button>
				</fieldset>
				<div className="pixel-story-chapters">
					<button
						type="button"
						onClick={previous}
						aria-label="Previous chapter"
					>
						←
					</button>
					<button type="button" onClick={next} aria-label="Next chapter">
						NEXT CHAPTER →
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
			<p className="pixel-story-hint">← → MOVE &nbsp; ↑ JUMP &nbsp; ↓ DUCK</p>
		</main>
	);
}
