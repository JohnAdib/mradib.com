import {
	movedFileText,
	movedGuideParams,
	movedGuideTarget,
} from "@/lib/guides/moved-routes";

export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
	return movedGuideParams();
}

// The old AI file of a moved guide: one line pointing at the new file.
export async function GET(
	_request: Request,
	{ params }: { params: Promise<{ guide: string }> },
): Promise<Response> {
	const { guide } = await params;
	const target = movedGuideTarget(guide);
	if (!target) return new Response(null, { status: 404 });
	return new Response(movedFileText(target, "llms.txt"), {
		headers: { "Content-Type": "text/plain; charset=utf-8" },
	});
}
