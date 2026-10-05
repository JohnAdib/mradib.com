import assert from "node:assert/strict";

export async function verifyCardSize(browser, base) {
	const context = await browser.newContext({
		viewport: { width: 375, height: 667 },
		reducedMotion: "reduce",
	});
	const page = await context.newPage();
	await page.goto(`${base}/@`);
	await page.locator(".share-email[href]").waitFor();
	const card = page.locator(".share-card");
	const original = await card.boundingBox();
	await page.getByRole("button", { name: "Adjust card size" }).click();
	const range = page.getByRole("slider", { name: "Card size" });
	await range.focus();
	await range.press("Home");
	for (let i = 0; i < 60; i++) await range.press("ArrowRight");
	await page.screenshot({
		path: `${process.env.SHARE_SCREENSHOTS || "/tmp/mradib-share-qa"}/calibration.png`,
	});
	await page.getByRole("button", { name: "Done", exact: true }).click();
	assert.ok(
		await page
			.getByRole("button", { name: "Adjust card size" })
			.evaluate((el) => el === document.activeElement),
	);
	const calibrated = await card.boundingBox();
	assert.ok(Math.abs(calibrated.width / original.width - 1.35) < 0.001);
	await page.reload();
	await page.waitForFunction(
		() => document.querySelector(".share-card-frame")?.style.zoom === "1.35",
	);
	await page.setViewportSize({ width: 1440, height: 900 });
	const resized = await card.boundingBox();
	assert.equal(resized.width, calibrated.width);
	assert.equal(resized.height, calibrated.height);
	await page
		.getByRole("button", { name: "Share profile", exact: true })
		.click();
	assert.deepEqual(await card.boundingBox(), resized);
	await page.getByRole("button", { name: "Adjust card size" }).click();
	await page.getByRole("button", { name: "Reset", exact: true }).click();
	assert.equal((await card.boundingBox()).height, original.height);
	await page.keyboard.press("Escape");
	assert.equal(
		await page.getByRole("region", { name: "Adjust card size" }).count(),
		0,
	);
	await context.close();
	console.log(
		"Device calibration persists, remains fixed on resize and QR, and resets correctly.",
	);
}
