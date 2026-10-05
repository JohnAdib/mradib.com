import assert from "node:assert/strict";

export async function verifyMobileScrollLock(browser, base) {
	const context = await browser.newContext({
		viewport: { width: 375, height: 667 },
		isMobile: true,
		hasTouch: true,
		reducedMotion: "reduce",
	});
	const page = await context.newPage();
	await page.goto(`${base}/@`);
	await page.locator(".share-email[href]").waitFor();
	const cdp = await context.newCDPSession(page);
	async function swipe(selector) {
		const before = await page.locator(selector).boundingBox();
		for (const [start, end] of [
			[500, 200],
			[200, 500],
		]) {
			await cdp.send("Input.dispatchTouchEvent", {
				type: "touchStart",
				touchPoints: [{ x: 180, y: start }],
			});
			for (let step = 1; step <= 6; step++)
				await cdp.send("Input.dispatchTouchEvent", {
					type: "touchMove",
					touchPoints: [{ x: 180, y: start + ((end - start) * step) / 6 }],
				});
			await cdp.send("Input.dispatchTouchEvent", {
				type: "touchEnd",
				touchPoints: [],
			});
		}
		await page.mouse.wheel(0, 500);
		await page.evaluate(
			() =>
				new Promise((resolve) =>
					requestAnimationFrame(() => requestAnimationFrame(resolve)),
				),
		);
		assert.equal(
			await page.evaluate(() => scrollY),
			0,
			"Document moved after touch/wheel",
		);
		assert.deepEqual(
			await page.locator(selector).boundingBox(),
			before,
			"Surface moved after touch/wheel",
		);
	}
	const locking = await page.evaluate(() => ({
		body: getComputedStyle(document.body).position,
		root: getComputedStyle(document.documentElement).overscrollBehaviorY,
		gestures: getComputedStyle(document.querySelector(".share-page"))
			.touchAction,
	}));
	assert.equal(locking.body, "fixed");
	assert.equal(locking.root, "none");
	assert.equal(locking.gestures, "pinch-zoom");
	await swipe(".share-card");
	await page
		.getByRole("button", { name: "Share profile", exact: true })
		.click();
	await page.getByRole("region", { name: "QR code" }).waitFor();
	await swipe(".share-card");
	await page.getByRole("button", { name: "Close QR code" }).click();
	await page
		.getByRole("region", { name: "QR code" })
		.waitFor({ state: "hidden" });
	await page.goto(`${base}/contact`);
	assert.notEqual(
		await page.evaluate(() => getComputedStyle(document.body).position),
		"fixed",
		"Lock leaked to Contact",
	);
	await page.mouse.wheel(0, 500);
	await page.waitForFunction(() => scrollY > 0);
	await context.close();
	console.log(
		"Mobile touch and wheel stay locked on /@ and QR; Contact still scrolls.",
	);
}
