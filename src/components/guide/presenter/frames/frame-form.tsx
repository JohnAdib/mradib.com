/** An application form: two faint answer fields, beside the numeral, waiting to be filled. */
export function FrameForm() {
	return (
		<div
			aria-hidden="true"
			className="absolute top-6 right-6 left-24 -z-10 space-y-3"
		>
			<div>
				<div className="mb-1.5 h-1.5 w-16 rounded-full bg-white/15" />
				<div className="h-6 rounded-md ring-1 ring-white/15" />
			</div>
			<div>
				<div className="mb-1.5 h-1.5 w-24 rounded-full bg-white/15" />
				<div className="h-6 rounded-md ring-1 ring-white/15" />
			</div>
		</div>
	);
}
