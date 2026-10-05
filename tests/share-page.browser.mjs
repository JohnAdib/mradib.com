import fs from "node:fs/promises";
import { chromium } from "playwright-core";

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
	[667, 375],
	[896, 414],
];
const results = [];
for (const theme of ["light", "dark"])
	for (const [width, height] of sizes) {
		const context = await browser.newContext({
			viewport: { width, height },
			colorScheme: theme,
			reducedMotion: "reduce",
		});
		const page = await context.newPage();
		await page.goto(`${base}/share`);
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
			links: [...document.querySelectorAll("main a")].map((a) =>
				a.getAttribute("href"),
			),
		}));
		if (fit.width > width || fit.height > height)
			throw new Error(JSON.stringify({ theme, width, height, ...fit }));
		await page.screenshot({ path: `${output}/share-${theme}-${width}.png` });
		await page.getByRole("button", { name: "QR code", exact: true }).click();
		await page.getByRole("dialog").waitFor();
		const qrFit = await page.getByRole("dialog").locator("img").boundingBox();
		if (qrFit.x < 0 || qrFit.y < 0 || qrFit.y + qrFit.height > height)
			throw new Error("QR outside viewport");
		if (width === 375)
			await page.screenshot({ path: `${output}/qr-${theme}.png` });
		await page.keyboard.press("Escape");
		await page.getByRole("dialog").waitFor({ state: "hidden" });
		if (
			!(await page
				.getByRole("button", { name: "QR code", exact: true })
				.evaluate((el) => el === document.activeElement))
		)
			throw new Error("Focus not restored");
		results.push({ theme, width, height, fit: true });
		await context.close();
	}
const context = await browser.newContext({
	viewport: { width: 375, height: 667 },
	permissions: ["clipboard-read", "clipboard-write"],
});
const page = await context.newPage();
await page.goto(`${base}/share`);
await page.evaluate(() =>
	Object.defineProperty(navigator, "share", {
		value: undefined,
		configurable: true,
	}),
);
await page.getByRole("button", { name: "Share", exact: true }).click();
await page.getByRole("status").filter({ hasText: "Link copied" }).waitFor();
if (
	(await page.evaluate(() => navigator.clipboard.readText())) !==
	"https://mradib.com/share"
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
await page.getByRole("button", { name: "Share", exact: true }).click();
if (
	(await page.evaluate(() => window.sharedData)).url !==
	"https://mradib.com/share"
)
	throw new Error("Native share payload");
await context.close();
await browser.close();
await fs.writeFile(`${output}/results.json`, JSON.stringify(results, null, 2));
console.log(
	`${results.length} viewport/theme checks passed; QR, Escape, focus restoration, clipboard and native share passed.`,
);
