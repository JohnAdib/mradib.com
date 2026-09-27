/** An application form: two faint answer fields waiting to be filled. */
export function FrameForm() {
	return (
		<div
			aria-hidden="true"
			className="absolute inset-x-6 top-24 -z-10 space-y-4"
		>
			<div>
				<div className="mb-2 h-1.5 w-20 rounded-full bg-white/15" />
				<div className="h-8 rounded-lg ring-1 ring-white/15" />
			</div>
			<div>
				<div className="mb-2 h-1.5 w-28 rounded-full bg-white/15" />
				<div className="h-8 rounded-lg ring-1 ring-white/15" />
			</div>
		</div>
	);
}
