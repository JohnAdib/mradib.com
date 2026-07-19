import { Inter, Newsreader } from "next/font/google";

export const fontEn = Inter({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-en",
});

// Display voice for headlines and big numbers, decided 2026-07-19
export const fontDisplay = Newsreader({
	subsets: ["latin"],
	display: "swap",
	style: ["normal", "italic"],
	axes: ["opsz"],
	variable: "--font-display",
});
