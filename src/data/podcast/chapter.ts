export interface PodcastChapter {
	id: string;
	title: string;
	seconds: number;
	paragraphs: string[];
	quote?: { text: string };
}
