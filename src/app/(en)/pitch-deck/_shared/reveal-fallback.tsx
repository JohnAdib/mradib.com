/** No-JS and pre-hydration fallback so scroll-revealed content is always visible. */
export function RevealFallback() {
	return (
		<noscript>
			<style>{".reveal-on-scroll{opacity:1;transform:none;}"}</style>
		</noscript>
	);
}
