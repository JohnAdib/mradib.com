import fs from "node:fs/promises";
import QRCode from "qrcode";
import { shareProfile } from "../src/data/share.ts";

const directory = new URL("../public/share/", import.meta.url);
await fs.mkdir(directory, { recursive: true });
const options = {
	errorCorrectionLevel: "Q",
	margin: 4,
	width: 600,
	color: { dark: "#111111", light: "#ffffff" },
};
await fs.writeFile(
	new URL("qr.svg", directory),
	await QRCode.toString(shareProfile.url, { ...options, type: "svg" }),
);
await QRCode.toFile(
	new URL("qr.png", directory).pathname,
	shareProfile.url,
	options,
);
console.log(`Generated QR for ${shareProfile.url}`);
