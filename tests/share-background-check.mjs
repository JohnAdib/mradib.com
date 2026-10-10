import assert from "node:assert/strict";
import fs from "node:fs/promises";
import sharp from "sharp";

// Check rendered light travel, not just whether an animation is running.
export async function verifyShareBackground(browser, base, output) {
	await fs.mkdir(output, { recursive: true });
	for (const theme of ["light", "dark"]) {
		const page = await browser.newPage({
			viewport: { width: 375, height: 667 },
			isMobile: true,
			hasTouch: true,
			colorScheme: theme,
			reducedMotion: "no-preference",
		});
		try {
			await page.goto(`${base}/@`);
			await page.locator(".share-email[href]").waitFor();
			await page.evaluate(() => document.fonts.ready);
			const card = await page.locator(".share-card").boundingBox();
			const frames = [];
			for (const time of [0, 3000]) {
				await page.evaluate(async (time) => {
					for (const animation of document
						.querySelector(".share-backdrop")
						.getAnimations({ subtree: true })) {
						animation.pause();
						animation.currentTime = time;
					}
					await new Promise((resolve) =>
						requestAnimationFrame(() => requestAnimationFrame(resolve)),
					);
				}, time);
				const png = await page.screenshot({
					path: `${output}/background-${theme}-${time}.png`,
				});
				frames.push(await sharp(png).removeAlpha().raw().toBuffer());
			}
			let difference = 0;
			let samples = 0;
			for (let y = 0; y < 667; y++)
				for (let x = 0; x < 375; x++) {
					// Ignore the card and share control; only exposed background matters.
					if (
						x >= card.x - 4 &&
						x <= card.x + card.width + 4 &&
						y >= card.y - 4 &&
						y <= card.y + card.height + 4
					)
						continue;
					if (x > 300 && y < 70) continue;
					for (let c = 0; c < 3; c++) {
						const i = (y * 375 + x) * 3 + c;
						difference += Math.abs(frames[0][i] - frames[1][i]);
						samples++;
					}
				}
			const change = difference / samples;
			console.log(
				`${theme}: mean exposed background change over three seconds = ${change.toFixed(2)}`,
			);
			assert.ok(
				change >= 8,
				`${theme} background movement is too faint (${change.toFixed(2)})`,
			);
		} finally {
			await page.close();
		}
	}
}
