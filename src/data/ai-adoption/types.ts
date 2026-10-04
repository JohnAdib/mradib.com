export interface ArticleSectionData {
	id: string;
	title: string;
	tocTitle?: string;
	paragraphs: string[];
	bullets?: string[];
	kind?:
		| "loop"
		| "example"
		| "tests"
		| "flows"
		| "activity"
		| "errors"
		| "adoption";
}
