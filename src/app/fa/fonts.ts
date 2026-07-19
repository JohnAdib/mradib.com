import { Vazirmatn } from "next/font/google";

// Persian glyphs live in the arabic subset, so preload arabic and latin.
// Scoped to the fa root layout so en pages never preload Vazirmatn.
export const fontFa = Vazirmatn({
	subsets: ["arabic", "latin"],
	display: "swap",
	variable: "--font-fa",
});
