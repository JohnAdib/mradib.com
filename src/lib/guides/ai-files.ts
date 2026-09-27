import type { IGuide } from "@/data/guides/guide-bundle";

export interface IGuideAiFile {
	path: string;
	description: string;
}

/** The two AI-facing files of a guide. Paths derive from the article path. */
export function guideAiFiles(guide: IGuide): IGuideAiFile[] {
	const path = guide.article.pagePath;
	return [
		{ path: `${path}/llms.txt`, description: guide.ai.fileNotes.llms },
		{ path: `${path}/skill.md`, description: guide.ai.fileNotes.skill },
	];
}
