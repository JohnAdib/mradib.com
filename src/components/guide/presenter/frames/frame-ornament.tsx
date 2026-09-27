import type { GuideFrame } from "@/data/guides/guide-bundle";
import { FrameForm } from "./frame-form";
import { FramePage } from "./frame-page";
import { FrameScreen } from "./frame-screen";
import { FrameSheet } from "./frame-sheet";
import { FrameVideo } from "./frame-video";

/** The decorative hint of the artifact behind the stage text. A slide needs none. */
export function FrameOrnament({ frame }: { frame: GuideFrame }) {
	switch (frame) {
		case "page":
			return <FramePage />;
		case "screen":
			return <FrameScreen />;
		case "video":
			return <FrameVideo />;
		case "sheet":
			return <FrameSheet />;
		case "form":
			return <FrameForm />;
		default:
			return null;
	}
}
