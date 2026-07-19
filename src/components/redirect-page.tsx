type RedirectPageProps = {
	target: string;
};

/**
 * No-JS and no-crawler safe redirect body. redirect() throws during render, so
 * a component placed after it never ships. This renders the destination three
 * ways: a meta refresh (React 19 hoists it into head) for no-JS clients, an
 * inline location.replace for instant navigation, and a visible anchor as an
 * accessible fallback. Targets are compile-time constants, never user input, so
 * dangerouslySetInnerHTML carries no injection risk.
 */
export function RedirectPage({ target }: RedirectPageProps) {
	return (
		<>
			<meta httpEquiv="refresh" content={`0;url=${target}`} />
			<script
				// biome-ignore lint/security/noDangerouslySetInnerHtml: compile-time constant target, never user input
				dangerouslySetInnerHTML={{
					__html: `location.replace(${JSON.stringify(target)})`,
				}}
			/>
			<p>
				Redirecting to <a href={target}>{target}</a>
			</p>
		</>
	);
}
