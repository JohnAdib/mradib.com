// Checks every reference URL in the fundraising kit answers with a 2xx or 3xx.
// Run where the network is open: npm run verify:links
import { acceleratorApplicationGuide } from "@/data/accelerator-application";
import { financialModelGuide } from "@/data/financial-model";
import { founderVideoGuide } from "@/data/founder-video";
import { onePagerGuide } from "@/data/one-pager";
import { pitchDeckGuide } from "@/data/pitch-deck";
import { productDemoGuide } from "@/data/product-demo";

const guides = [
	pitchDeckGuide,
	onePagerGuide,
	productDemoGuide,
	founderVideoGuide,
	financialModelGuide,
	acceleratorApplicationGuide,
];
const headers = { "User-Agent": "Mozilla/5.0 (compatible; mradib-link-check)" };

async function status(url) {
	for (const method of ["HEAD", "GET"]) {
		try {
			const response = await fetch(url, {
				method,
				headers,
				redirect: "follow",
			});
			if (response.ok || (response.status >= 300 && response.status < 400)) {
				return response.status;
			}
			if (method === "GET") return response.status;
		} catch (error) {
			if (method === "GET") return `error: ${error.message}`;
		}
	}
	return "unreachable";
}

const urls = new Map();
for (const guide of guides) {
	for (const reference of guide.references) {
		urls.set(
			reference.url,
			`${guide.name}: ${reference.source}, ${reference.title}`,
		);
	}
}
let failures = 0;
for (const [url, label] of urls) {
	const result = await status(url);
	const ok = typeof result === "number" && result < 400;
	if (!ok) failures += 1;
	console.log(
		`${ok ? "ok " : "FAIL"} ${String(result).padEnd(4)} ${url}  (${label})`,
	);
}
console.log(
	failures === 0
		? "All reference links answer."
		: `${failures} link(s) failed.`,
);
process.exit(failures === 0 ? 0 : 1);
