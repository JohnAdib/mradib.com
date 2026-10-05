import assert from "node:assert/strict";

export async function verifyShareMotion(browser, base) {
	async function open({
		permission = false,
		unavailable = false,
		reduced = false,
	} = {}) {
		const context = await browser.newContext({
			viewport: { width: 390, height: 844 },
			isMobile: true,
			hasTouch: true,
			reducedMotion: reduced ? "reduce" : "no-preference",
		});
		await context.addInitScript(
			({ permission, unavailable }) => {
				class Orientation extends Event {
					constructor(type, values) {
						super(type);
						Object.assign(this, values);
					}
				}
				if (permission)
					Orientation.requestPermission = () => {
						window.permissionRequested = true;
						return Promise.resolve("denied");
					};
				Object.defineProperty(window, "DeviceOrientationEvent", {
					value: unavailable ? undefined : Orientation,
					configurable: true,
				});
			},
			{ permission, unavailable },
		);
		const page = await context.newPage();
		await page.goto(`${base}/@`);
		await page.locator(".share-backdrop[data-paused]").waitFor();
		return { context, page };
	}
	const { context, page } = await open();
	const backdrop = page.locator(".share-backdrop");
	const motion = page.locator(".share-motion");
	assert.equal(
		await backdrop.evaluate(
			(el) => getComputedStyle(el, "::before").animationName,
		),
		"share-background-drift",
	);
	const initial = await backdrop.evaluate(
		(el) => getComputedStyle(el, "::before").transform,
	);
	await page.waitForFunction(
		(initial) =>
			getComputedStyle(document.querySelector(".share-backdrop"), "::before")
				.transform !== initial,
		initial,
	);
	const orient = (beta, gamma) =>
		page.evaluate(
			({ beta, gamma }) =>
				window.dispatchEvent(
					new DeviceOrientationEvent("deviceorientation", { beta, gamma }),
				),
			{ beta, gamma },
		);
	await orient(null, null);
	assert.equal(await backdrop.getAttribute("data-sensor"), null);
	await orient(45, 0);
	await orient(85, 40);
	await page.waitForFunction(
		() =>
			document
				.querySelector(".share-motion")
				.style.getPropertyValue("--sensor-y") === "2deg",
	);
	assert.equal(
		await motion.evaluate((el) => el.style.getPropertyValue("--sensor-x")),
		"-2deg",
	);
	assert.equal(
		await backdrop.evaluate((el) => el.style.transform),
		"translate3d(-14px, -14px, 0px)",
	);
	assert.equal(
		await backdrop.evaluate(
			(el) => getComputedStyle(el, "::before").animationPlayState,
		),
		"paused",
	);
	await page
		.getByRole("button", { name: "Share profile", exact: true })
		.click();
	await page.waitForFunction(
		() =>
			getComputedStyle(document.querySelector(".share-motion")).transform ===
			"none",
	);
	await page.getByRole("button", { name: "Close QR code" }).click();
	await page.waitForFunction(
		() => !document.querySelector(".share-backdrop").dataset.sensor,
	);
	assert.equal(
		await backdrop.evaluate(
			(el) => getComputedStyle(el, "::before").animationPlayState,
		),
		"running",
	);
	await orient(40, 0);
	await orient(50, 10);
	await page.emulateMedia({ reducedMotion: "reduce" });
	await page.waitForFunction(
		() => document.querySelector(".share-backdrop").dataset.paused === "true",
	);
	assert.equal(
		await backdrop.evaluate(
			(el) => getComputedStyle(el, "::before").animationName,
		),
		"none",
	);
	assert.equal(
		await motion.evaluate((el) => getComputedStyle(el).transform),
		"none",
	);
	await page.emulateMedia({ reducedMotion: "no-preference" });
	await page.evaluate(() => {
		Object.defineProperty(document, "hidden", {
			value: true,
			configurable: true,
		});
		document.dispatchEvent(new Event("visibilitychange"));
	});
	await orient(45, 20);
	assert.equal(await backdrop.getAttribute("data-paused"), "true");
	assert.equal(await backdrop.getAttribute("data-sensor"), null);
	assert.equal(
		await backdrop.evaluate(
			(el) => getComputedStyle(el, "::before").animationPlayState,
		),
		"paused",
	);
	await context.close();
	for (const mode of [
		{ permission: true },
		{ unavailable: true },
		{ reduced: true },
	]) {
		const { context, page } = await open(mode);
		if (!mode.unavailable)
			await page.evaluate(() =>
				window.dispatchEvent(
					new DeviceOrientationEvent("deviceorientation", {
						beta: 45,
						gamma: 20,
					}),
				),
			);
		assert.equal(
			await page.locator(".share-backdrop").getAttribute("data-sensor"),
			null,
		);
		assert.notEqual(
			await page.evaluate(() => window.permissionRequested),
			true,
		);
		assert.equal(
			await page
				.locator(".share-backdrop")
				.evaluate((el) => getComputedStyle(el, "::before").animationName),
			mode.reduced ? "none" : "share-background-drift",
		);
		await context.close();
	}
	console.log(
		"Ambient drift, bounded sensor tilt, QR stability, sensor fallback and reduced motion passed; no permission prompts.",
	);
}
