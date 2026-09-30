import type { GuideFrame } from "@/data/guides/guide-bundle";
import type { StageSize } from "../stage-frame";
import { FrameForm } from "./frame-form";
import { FramePage } from "./frame-page";
import { FrameScreen } from "./frame-screen";
import { FrameSheet } from "./frame-sheet";
import { FrameVideo } from "./frame-video";

export interface IFrameOrnamentProps {
	size: StageSize;
}

/** The decorative hint of the artifact behind the stage text. A slide needs none. */
export function FrameOrnament({
	frame,
	size,
}: IFrameOrnamentProps & { frame: GuideFrame }) {
	switch (frame) {
		case "page":
			return <FramePage size={size} />;
		case "screen":
			return <FrameScreen size={size} />;
		case "video":
			return <FrameVideo size={size} />;
		case "sheet":
			return <FrameSheet size={size} />;
		case "form":
			return <FrameForm size={size} />;
		default:
			return null;
	}
}
