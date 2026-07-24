import clsx from "clsx";

interface YouTubeEmbedProps {
	url: string;
	title: string;
	className?: string;
}

function getYouTubeId(url: string): string | null {
	const patterns = [
		/[?&]v=([A-Za-z0-9_-]{6,})/,
		/youtu\.be\/([A-Za-z0-9_-]{6,})/,
		/\/embed\/([A-Za-z0-9_-]{6,})/,
		/\/shorts\/([A-Za-z0-9_-]{6,})/,
	];
	for (const pattern of patterns) {
		const match = url.match(pattern);
		if (match) {
			return match[1];
		}
	}
	return null;
}

export function YouTubeEmbed({ url, title, className }: YouTubeEmbedProps) {
	const id = getYouTubeId(url);
	if (!id) {
		return null;
	}

	return (
		<div
			className={clsx(
				"overflow-hidden rounded-2xl ring-1 ring-zinc-900/10 dark:ring-white/10",
				className,
			)}
		>
			<iframe
				src={`https://www.youtube-nocookie.com/embed/${id}`}
				title={title}
				loading="lazy"
				allowFullScreen
				referrerPolicy="strict-origin-when-cross-origin"
				allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				className="aspect-video w-full border-0"
			/>
		</div>
	);
}
