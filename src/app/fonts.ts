import { Inter, Newsreader } from "next/font/google";

/*
  display "optional" keeps LCP off the font-swap repaint: body text paints
  once in the size-adjusted fallback and only upgrades to Inter when the
  file is already available. Newsreader stays "swap"; the display voice is
  worth the repaint.
*/
export const fontEn = Inter({
	subsets: ["latin"],
	display: "optional",
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
