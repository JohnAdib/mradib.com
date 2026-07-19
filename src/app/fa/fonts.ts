import { Vazirmatn } from "next/font/google";

// Persian glyphs live in the arabic subset. preload is off because the
// bundler folds this module's font CSS into the shared chunk, which would
// put both Vazirmatn files on every English page's critical path; with
// display swap the fa pages discover it through CSS and render text
// immediately in the fallback while it arrives.
export const fontFa = Vazirmatn({
	subsets: ["arabic", "latin"],
	display: "swap",
	preload: false,
	variable: "--font-fa",
});
