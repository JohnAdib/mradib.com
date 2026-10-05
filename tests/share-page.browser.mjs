import fs from "node:fs/promises";
import { chromium } from "playwright-core";
import { verifyMobileScrollLock } from "./share-scroll-check.mjs";
import { verifyTilt } from "./share-tilt-check.mjs";

const browser = await chromium.launch({ channel: "chrome", headless: true });
const output = process.env.SHARE_SCREENSHOTS || "/tmp/mradib-share-qa";
await fs.mkdir(output, { recursive: true });
const base = process.env.SHARE_BASE_URL || "http://localhost:3301";
const sizes = [
	[375, 667],
	[430, 932],
	[768, 1024],
	[1024, 768],
	[1440, 900],
	[1920, 1080],
	[2560, 1440],
	[320, 568],
	[320, 480],
	[568, 320],
	[667, 375],
	[896, 414],
];
const results = [];
for (const theme of ["light", "dark"]) {
	const context = await browser.newContext({
		viewport: { width: 375, height: 667 },
		colorScheme: theme,
		reducedMotion: "reduce",
	});
	const page = await context.newPage();
	await page.goto(`${base}/@`);
	await page.locator(".share-email[href]").waitFor();
	for (const [width, height] of sizes) {
		await page.setViewportSize({ width, height });
		await page.evaluate(async () => {
			await document.fonts.ready;
			await new Promise((r) =>
				requestAnimationFrame(() => requestAnimationFrame(r)),
			);
		});
		const fit = await page.evaluate(() => ({
			width: document.documentElement.scrollWidth,
			height: document.documentElement.scrollHeight,
			innerWidth,
			innerHeight,
			title: document.title,
			clipped: [
				...document.querySelectorAll(".share-trigger, .share-page a"),
			].some((el) => {
				const rect = el.getBoundingClientRect();
				return (
					rect.top < 0 ||
					rect.bottom > innerHeight ||
					rect.left < 0 ||
					rect.right > innerWidth
				);
			}),
			selectable: [
				...document.querySelectorAll(".share-page, .share-page *"),
			].some((el) => getComputedStyle(el).userSelect !== "none"),
			links: [...document.querySelectorAll("main a")].map((a) =>
				a.getAttribute("href"),
			),
		}));
		if (fit.clipped)
			throw new Error(`Clipped contact controls at ${width}x${height}`);
		if (fit.selectable) throw new Error("At-sign page allows selection");
		if (fit.links.some((href) => href?.includes("instagram")))
			throw new Error("Instagram link on at-sign page");
		if (fit.links.some((href) => href?.includes("justzapp")))
			throw new Error("Work email exposed");
		if (fit.width > width || fit.height > height)
			throw new Error(JSON.stringify({ theme, width, height, ...fit }));
		await page.screenshot({ path: `${output}/share-${theme}-${width}.png` });
		if (await page.getByRole("button", { name: "Adjust card size" }).count())
			throw new Error("Unrequested size control is present");
		const cardBefore = await page.locator(".share-card").boundingBox();
		const expectedRatio = 53.98 / 85.6;
		if (Math.abs(cardBefore.width / cardBefore.height - expectedRatio) > 0.002)
			throw new Error(`Card proportions changed at ${width}x${height}`);
		if (
			Math.abs(cardBefore.width - 320) > 0.05 ||
			Math.abs(cardBefore.height - (320 * 85.6) / 53.98) > 0.05
		)
			throw new Error(`Fixed card dimensions changed at ${width}x${height}`);
		const identityBefore = await page.locator(".share-identity").boundingBox();
		await page
			.getByRole("button", { name: "Share profile", exact: true })
			.click();
		await page.getByRole("region", { name: "QR code" }).waitFor();
		if (
			JSON.stringify(await page.locator(".share-identity").boundingBox()) !==
			JSON.stringify(identityBefore)
		)
			throw new Error("Identity moved when sharing");
		if (
			JSON.stringify(await page.locator(".share-card").boundingBox()) !==
			JSON.stringify(cardBefore)
		)
			throw new Error("Card resized when sharing");
		if (await page.getByRole("link", { name: /LinkedIn/ }).count())
			throw new Error("Hidden links remain accessible");
		const qrFit = await page
			.getByRole("region", { name: "QR code" })
			.locator("img")
			.boundingBox();
		if (qrFit.x < 0 || qrFit.y < 0 || qrFit.y + qrFit.height > height)
			throw new Error("QR outside viewport");
		if (width === 375)
			await page.screenshot({ path: `${output}/qr-${theme}.png` });
		await page.keyboard.press("Escape");
		await page
			.getByRole("region", { name: "QR code" })
			.waitFor({ state: "hidden" });
		if (
			!(await page
				.getByRole("button", { name: "Share profile", exact: true })
				.evaluate((el) => el === document.activeElement))
		)
			throw new Error("Focus not restored");
		results.push({ theme, width, height, fit: true });
	}
	await context.close();
}
const context = await browser.newContext({
	viewport: { width: 375, height: 667 },
	permissions: ["clipboard-read", "clipboard-write"],
});
const page = await context.newPage();
await page.goto(`${base}/@`);
await page.locator(".share-email[href]").waitFor();
await page.getByRole("button", { name: "Share profile", exact: true }).click();
await page.getByRole("region", { name: "QR code" }).waitFor();
const morphFrames = await page
	.locator(".share-qr-view")
	.evaluate((element) =>
		element
			.getAnimations()
			.flatMap((animation) => animation.effect.getKeyframes()),
	);
if (!morphFrames.some((frame) => frame.transform?.includes("scale(")))
	throw new Error("Missing in-card QR transition");
await page.evaluate(() =>
	Object.defineProperty(navigator, "share", {
		value: undefined,
		configurable: true,
	}),
);
await page
	.getByRole("button", { name: "Share mradib.com/@", exact: true })
	.click();
await page.getByRole("status").filter({ hasText: "Link copied" }).waitFor();
if (
	(await page.evaluate(() => navigator.clipboard.readText())) !==
	"https://mradib.com/@"
)
	throw new Error("Clipboard mismatch");
await page.evaluate(() =>
	Object.defineProperty(navigator, "share", {
		value: async (data) => {
			window.sharedData = data;
		},
		configurable: true,
	}),
);
await page
	.getByRole("button", { name: "Share mradib.com/@", exact: true })
	.click();
if (
	(await page.evaluate(() => window.sharedData)).url !== "https://mradib.com/@"
)
	throw new Error("Native share payload");
await context.close();
await verifyMobileScrollLock(browser, base);
await verifyTilt(browser, base);
await browser.close();
await fs.writeFile(`${output}/results.json`, JSON.stringify(results, null, 2));
console.log(
	`${results.length} viewport/theme checks passed; QR, Escape, focus restoration, clipboard and native share passed.`,
);
