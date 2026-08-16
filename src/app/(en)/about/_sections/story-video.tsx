"use client";

import {
	Dialog,
	DialogBackdrop,
	DialogPanel,
	DialogTitle,
} from "@headlessui/react";
import { PlayCircleIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { type CSSProperties, useRef, useState } from "react";

type StoryVideoAspect = "classic" | "landscape" | "portrait";

const panelStyles = {
	classic: {
		aspectRatio: "4 / 3",
		width: "min(36rem, calc(100vw - 2rem), calc(133.333dvh - 2.666rem))",
	},
	landscape: {
		aspectRatio: "16 / 9",
		width: "min(48rem, calc(100vw - 2rem), calc(177.778dvh - 3.556rem))",
	},
	portrait: {
		aspectRatio: "9 / 16",
		width: "min(24rem, calc(100vw - 2rem), calc(56.25dvh - 1.125rem))",
	},
} satisfies Record<StoryVideoAspect, CSSProperties>;

export function StoryVideo({
	ariaLabel,
	aspect,
	captionsSrc,
	label,
	src,
	title,
}: {
	ariaLabel: string;
	aspect: StoryVideoAspect;
	captionsSrc: string;
	label: string;
	src: string;
	title: string;
}) {
	const [isOpen, setIsOpen] = useState(false);
	const videoRef = useRef<HTMLVideoElement>(null);

	const close = () => {
		const video = videoRef.current;
		if (video) {
			video.pause();
			video.currentTime = 0;
		}
		setIsOpen(false);
	};

	return (
		<>
			<button
				type="button"
				onClick={() => setIsOpen(true)}
				aria-label={ariaLabel}
				aria-haspopup="dialog"
				className="inline-flex items-center gap-1 font-medium text-accent-700 underline decoration-accent-500/40 underline-offset-4 transition hover:text-accent-600 hover:decoration-accent-500 focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-600 motion-reduce:transition-none dark:text-accent-400 dark:hover:text-accent-300"
			>
				<span className="relative inline-block">
					<span>{label}</span>
					<span
						aria-hidden="true"
						className="story-video-shimmer absolute inset-0"
					>
						{label}
					</span>
				</span>
				<PlayCircleIcon aria-hidden="true" className="size-4 shrink-0" />
			</button>

			<Dialog
				transition
				open={isOpen}
				onClose={close}
				className="fixed inset-0 z-50"
			>
				<DialogBackdrop
					transition
					className="fixed inset-0 bg-black/85 backdrop-blur-sm transition-opacity duration-300 ease-out data-closed:opacity-0 motion-reduce:transition-none"
				/>
				<div className="fixed inset-0 flex items-center justify-center p-4">
					<DialogPanel
						transition
						style={panelStyles[aspect]}
						data-aspect={aspect}
						data-story-video-panel=""
						className="relative overflow-hidden rounded-2xl bg-black ring-1 ring-white/15 shadow-2xl transition-[opacity,transform] duration-300 ease-out data-closed:scale-95 data-closed:opacity-0 motion-reduce:transition-none"
					>
						<DialogTitle className="sr-only">{title}</DialogTitle>
						<button
							type="button"
							onClick={close}
							className="absolute top-3 right-3 z-10 rounded-full bg-black/65 p-2 text-white/80 ring-1 ring-white/20 backdrop-blur-sm transition hover:bg-black/85 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white motion-reduce:transition-none"
						>
							<XMarkIcon aria-hidden="true" className="size-5" />
							<span className="sr-only">Close</span>
						</button>

						{isOpen ? (
							<video
								ref={videoRef}
								controls
								autoPlay
								playsInline
								preload="metadata"
								onEnded={close}
								className="size-full bg-black object-contain"
							>
								<source src={src} type="video/mp4" />
								<track
									default
									kind="captions"
									label="English"
									src={captionsSrc}
									srcLang="en"
								/>
								Your browser does not support MP4 video.
							</video>
						) : null}
					</DialogPanel>
				</div>
			</Dialog>
		</>
	);
}
