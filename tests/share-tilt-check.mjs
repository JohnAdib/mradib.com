import assert from "node:assert/strict";

export async function verifyTilt(browser, base) {
	const context = await browser.newContext({
		viewport: { width: 1440, height: 900 },
	});
	const page = await context.newPage();
	await page.goto(`${base}/@`);
	await page.locator(".share-email[href]").waitFor();
	await page.mouse.move(1300, 100);
	await page.waitForFunction(() =>
		document.querySelector(".share-card").style.transform.includes("rotateY(2"),
	);
	const tilt = await page
		.locator(".share-card")
		.evaluate((el) => el.style.transform);
	for (const angle of tilt.matchAll(/rotate[XY]\(([-\d.]+)deg\)/g))
		assert.ok(Math.abs(Number(angle[1])) <= 2.5);
	await page.locator("html").dispatchEvent("pointerleave");
	const reset = await page.locator(".share-card").evaluate((el) => ({
		transform: el.style.transform,
		transition: el.style.transition,
	}));
	assert.ok(reset.transform.includes("rotateX(0deg) rotateY(0deg)"));
	assert.ok(reset.transition.includes("700ms"));
	await page.waitForFunction(
		() =>
			Math.abs(
				new DOMMatrix(
					getComputedStyle(document.querySelector(".share-card")).transform,
				).m13,
			) < 0.00001,
	);
	await context.close();
	const reduced = await browser.newContext({ reducedMotion: "reduce" });
	const quiet = await reduced.newPage();
	await quiet.goto(`${base}/@`);
	await quiet.locator(".share-email[href]").waitFor();
	await quiet.mouse.move(1100, 100);
	assert.ok(
		(await quiet.locator(".share-card").getAttribute("style")).includes(
			"rotateX(0deg) rotateY(0deg)",
		),
	);
	await reduced.close();
	console.log("Subtle desktop tilt, smooth return and reduced motion passed.");
}
