/** A spreadsheet: a header band and faint ruled rows, horizontal only. */
export function FrameSheet() {
	return (
		<div aria-hidden="true" className="absolute inset-0 -z-10">
			<div className="absolute inset-x-0 top-0 h-8 border-b border-white/10 bg-white/5" />
			<div className="absolute inset-x-6 top-8 bottom-24 bg-[repeating-linear-gradient(to_bottom,transparent_0,transparent_27px,rgba(255,255,255,0.07)_27px,rgba(255,255,255,0.07)_28px)]" />
		</div>
	);
}
