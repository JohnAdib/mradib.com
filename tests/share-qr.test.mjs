import assert from "node:assert/strict";
import test from "node:test";
import jsQR from "jsqr";
import sharp from "sharp";
import { shareProfile } from "../src/data/share.ts";

for (const format of ["png", "svg"]) {
	test(`Published ${format} QR decodes to the sharing page`, async () => {
		const { data, info } = await sharp(`public/share/qr.${format}`)
			.ensureAlpha()
			.raw()
			.toBuffer({ resolveWithObject: true });
		const decoded = jsQR(new Uint8ClampedArray(data), info.width, info.height);
		assert.equal(decoded?.data, shareProfile.url);
	});
}
