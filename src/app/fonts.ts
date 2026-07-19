import { Inter, Newsreader, Vazirmatn } from "next/font/google";

export const fontFa = Vazirmatn({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-fa",
});

export const fontEn = Inter({
	subsets: ["latin"],
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
