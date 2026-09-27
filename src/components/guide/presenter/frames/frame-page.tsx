/** A printed page: an inner margin and a few faint lines of text. */
export function FramePage() {
	return (
		<div
			aria-hidden="true"
			className="absolute inset-3 -z-10 rounded-2xl ring-1 ring-white/10"
		>
			<div className="absolute top-6 right-6 left-24 space-y-2.5">
				<div className="h-1.5 w-full rounded-full bg-white/10" />
				<div className="h-1.5 w-5/6 rounded-full bg-white/10" />
				<div className="h-1.5 w-2/3 rounded-full bg-white/10" />
			</div>
		</div>
	);
}
