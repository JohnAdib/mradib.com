import type { Viewport } from "next";

export const rootViewport: Viewport = {
	width: "device-width",
	minimumScale: 1,
	initialScale: 1,
	maximumScale: 5,
	colorScheme: "light dark",
	themeColor: [
		{
			media: "(prefers-color-scheme: light)",
			color: "#fafafa",
		},
		{
			media: "(prefers-color-scheme: dark)",
			color: "#000000",
		},
	],
};
