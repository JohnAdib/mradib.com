/** A browser window: the title bar with its three dots. */
export function FrameScreen() {
	return (
		<div
			aria-hidden="true"
			className="absolute inset-x-0 top-0 -z-10 flex h-8 items-center gap-1.5 border-b border-white/10 bg-white/5 px-4"
		>
			<span className="h-2 w-2 rounded-full bg-white/25" />
			<span className="h-2 w-2 rounded-full bg-white/25" />
			<span className="h-2 w-2 rounded-full bg-white/25" />
			<span className="ml-3 h-3 flex-1 max-w-48 rounded-full bg-white/10" />
		</div>
	);
}
