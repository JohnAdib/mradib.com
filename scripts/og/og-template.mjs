// HTML for one 1200x630 social card, rendered by generate-og-images.mjs.
// Visual language mirrors the site: zinc-950 base, teal accent glows, the
// starfield, Newsreader display type, and the rotated portrait treatment.
import { join } from "node:path";
import { pathToFileURL } from "node:url";

const FONTS = {
	en: "family=Inter:wght@400;500;600&family=Newsreader:opsz,wght@6..72,500;6..72,600",
	fa: "family=Vazirmatn:wght@400;500;700",
};

const STARS =
	"180px 88px #d4d4d8, 420px 44px #a1a1aa, 700px 120px #d4d4d8, 940px 60px #a1a1aa, 1080px 170px #d4d4d8, 300px 200px #71717a, 620px 240px #71717a, 1140px 320px #52525b, 90px 330px #52525b, 840px 300px #71717a";

function headlineSize(text, hasArt, lang) {
	const n = [...text].length;
	if (lang === "fa") return n <= 12 ? 92 : n <= 26 ? 74 : 58;
	const size = n <= 30 ? 92 : n <= 48 ? 76 : n <= 62 ? 66 : 56;
	if (!hasArt) return size;
	// The art column caps long headlines, but a short one (a name) stays big.
	return n <= 20 ? 84 : Math.min(size, 64);
}

/** Escape for HTML, then upgrade straight apostrophes to typographic ones. */
function text(value) {
	return value
		.replaceAll("&", "&amp;")
		.replaceAll("<", "&lt;")
		.replaceAll("'", "’");
}

export function buildCardHtml(card, publicDir) {
	const fa = card.lang === "fa";
	const art = card.artwork;
	const fileUrl = (p) => pathToFileURL(join(publicDir, p)).href;
	const artHtml = art
		? art.fit === "cover"
			? `<div class="art"><img src="${fileUrl(art.src)}" alt=""></div>`
			: `<div class="art panel"><img src="${fileUrl(art.src)}" alt=""></div>`
		: "";
	const avatar = art
		? ""
		: `<img class="avatar" src="${fileUrl("/img/john-adib-hero.jpg")}" alt="">`;
	const display = fa ? "'Vazirmatn'" : "'Newsreader', serif";
	const body = fa ? "'Vazirmatn'" : "'Inter'";
	const hSize = headlineSize(card.headline, Boolean(art), card.lang);
	const pSize = [...card.proof].length > 100 ? 25 : 27;
	return `<!doctype html>
<html lang="${card.lang}" dir="${fa ? "rtl" : "ltr"}"><head><meta charset="utf-8">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?${FONTS[card.lang]}&display=block">
<style>
* { margin: 0; padding: 0; box-sizing: border-box; }
body { width: 1200px; height: 630px; overflow: hidden; }
.card { position: relative; width: 1200px; height: 630px; background: #09090b; font-family: ${body}, sans-serif; overflow: hidden; }
.glow, .art-glow { position: absolute; border-radius: 50%; filter: blur(44px); }
.glow-a { width: 780px; height: 780px; left: -200px; bottom: -360px; background: radial-gradient(circle, rgba(20,184,166,.27), transparent 62%); }
.glow-b { width: 640px; height: 640px; right: -220px; top: -280px; background: radial-gradient(circle, rgba(94,234,212,.12), transparent 62%); }
.art-glow { width: 560px; height: 560px; inset-inline-end: -40px; top: 40px; background: radial-gradient(circle, rgba(20,184,166,.32), transparent 64%); }
.stars { position: absolute; top: 0; left: 0; width: 2px; height: 2px; border-radius: 50%; box-shadow: ${STARS}; opacity: .5; }
.vignette { position: absolute; inset: 0; background: radial-gradient(120% 120% at 50% 40%, transparent 58%, rgba(0,0,0,.42)); }
.frame { position: absolute; inset: 0; box-shadow: inset 0 0 0 1px rgba(255,255,255,.07); }
.content { position: absolute; inset: 0; padding: 72px; display: flex; flex-direction: column; }
.text { max-width: ${art ? "620px" : "980px"}; }
.eyebrow { color: #2dd4bf; font-weight: 600; font-size: ${fa ? 27 : 23}px; ${fa ? "" : "letter-spacing: .17em; text-transform: uppercase;"} }
.headline { margin-top: 30px; color: #f6f5f4; font-family: ${display}; font-weight: ${fa ? 700 : 600}; font-size: ${hSize}px; line-height: ${fa ? 1.32 : 1.06}; ${fa ? "" : "letter-spacing: -0.02em;"} }
.proof { margin-top: 30px; color: #a1a1aa; font-size: ${pSize}px; line-height: 1.5; font-weight: 400; max-width: ${art ? "560px" : "760px"}; }
.strip { margin-top: auto; padding-top: 28px; display: flex; align-items: center; gap: 16px; }
.avatar { width: 56px; height: 56px; border-radius: 50%; object-fit: cover; box-shadow: 0 0 0 1px rgba(45,212,191,.45); }
.name { color: #e4e4e7; font-size: 25px; font-weight: 600; }
.dot { width: 5px; height: 5px; border-radius: 50%; background: #14b8a6; }
.site { color: #71717a; font-size: 25px; }
.art { position: absolute; top: 72px; inset-inline-end: 72px; width: 400px; height: 486px; border-radius: 16px; overflow: hidden; transform: rotate(${fa ? -3 : 3}deg); box-shadow: 0 0 0 1px rgba(255,255,255,.1), 0 44px 90px rgba(0,0,0,.55); }
.art img { width: 100%; height: 100%; object-fit: cover; }
.art.panel { top: 115px; height: 400px; background: #fff; display: flex; align-items: center; justify-content: center; }
.art.panel img { object-fit: contain; }
</style></head>
<body><div class="card">
<div class="glow glow-a"></div><div class="glow glow-b"></div>
${art ? '<div class="art-glow"></div>' : ""}<div class="stars"></div>
<div class="vignette"></div><div class="frame"></div>
<div class="content">
<div class="text">
<div class="eyebrow">${text(card.eyebrow)}</div>
<h1 class="headline">${text(card.headline)}</h1>
<p class="proof">${text(card.proof)}</p>
</div>
<div class="strip">${avatar}${card.headline.trim() === (fa ? "جان ادیب" : "John Adib") ? "" : `<span class="name">${fa ? "جان ادیب" : "John Adib"}</span><span class="dot"></span>`}<span class="site">mradib.com</span></div>
</div>
${artHtml}
</div></body></html>`;
}
