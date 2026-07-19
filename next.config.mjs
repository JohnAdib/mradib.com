/** @type {import('next').NextConfig} */

// const isProd = process.env.NODE_ENV === 'production';
// const productionUrl = 'https://blog.mradib.com';
// const assetPrefix = isProd ? productionUrl : undefined;

const nextConfig = {
	output: "export",
	// assetPrefix: assetPrefix,
	// trailingSlash stays false on purpose: URLs, canonicals, and the
	// sitemap are all slash free today, and flipping it would force a full
	// re-canonicalization cycle in Search Console for no ranking benefit.
	images: {
		unoptimized: true,
	},
	pageExtensions: ["ts", "tsx"],
	experimental: {
		// The en and fa trees each own a root layout, so unmatched URLs need
		// global-not-found.tsx to render the 404 document.
		globalNotFound: true,
	},
};

export default nextConfig;
