/** A camera viewfinder: a recording dot and one soft frame corner. */
export function FrameVideo() {
	return (
		<div aria-hidden="true" className="absolute inset-0 -z-10">
			<span className="absolute top-5 right-5 flex h-5 w-5 items-center justify-center rounded-full ring-1 ring-white/25">
				<span className="h-2 w-2 rounded-full bg-rose-500" />
			</span>
			<span className="absolute right-5 bottom-5 h-6 w-6 rounded-br-lg border-r border-b border-white/25" />
		</div>
	);
}
