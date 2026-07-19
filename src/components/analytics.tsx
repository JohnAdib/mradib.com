import Script from "next/script";

const GA_ID = "G-0T9SVDBER6";

export function Analytics() {
	return (
		<>
			<Script
				src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
				strategy="lazyOnload"
			/>
			<Script
				id="ga-bootstrap"
				strategy="lazyOnload"
				// biome-ignore lint/security/noDangerouslySetInnerHtml: static gtag bootstrap
				dangerouslySetInnerHTML={{
					__html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');`,
				}}
			/>
		</>
	);
}
