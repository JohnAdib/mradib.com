import type {
	ChecklistGroupId,
	IChecklistItemCopy,
} from "./checklist-interface";

export const groupTitlesEn: Record<ChecklistGroupId, string> = {
	template: "Template & structure",
	contact: "Contact details",
	summary: "Summary",
	experience: "Work experience",
	skills: "Skills",
	education: "Education",
	optional: "Extra sections",
	length: "Length",
	ats: "Tailoring & ATS",
	"action-verbs": "Action verbs",
	review: "Final review",
};

export const itemCopyEn: Record<string, IChecklistItemCopy> = {
	fmt: {
		question: "Did you use a suitable format for your resume?",
		title: "Resume format",
		problem: "The layout is hard to scan and may break in an ATS.",
		fix: "Use a clean single column template with standard headings and export to PDF.",
	},
	sect: {
		question: "Did you include all the essential sections in your resume?",
		title: "Essential sections",
		problem: "A core section is missing, so the resume feels incomplete.",
		fix: "Include contact, summary, experience, skills, and education at minimum.",
	},
	pdf: {
		question: "Did you export your resume as a PDF?",
		title: "PDF format",
		problem: "A Word file can reflow or look broken on another machine.",
		fix: "Export to PDF so the layout stays fixed, unless the posting asks for Word.",
	},
	consistency: {
		question: "Is the formatting consistent throughout?",
		title: "Consistent formatting",
		problem: "Fonts, bullet styles, and spacing change across the page.",
		fix: "Use one font family and the same spacing and bullet style everywhere.",
	},
	filesize: {
		question: "Is the file a reasonable size to email and open?",
		title: "File size",
		problem: "A heavy file is slow to send and slow to open.",
		fix: "Keep the PDF under about a megabyte by compressing images.",
	},
	fontcolor: {
		question: "Are the font and colours professional and restrained?",
		title: "Font and colours",
		problem: "Loud fonts or colours pull focus from the content.",
		fix: "Use one clean font and at most one accent colour.",
	},
	cont: {
		question: "Does the contact section include all the essential details?",
		title: "Contact details",
		problem: "Key contact details are missing or hard to find.",
		fix: "Add full name, phone, professional email, and city at the top.",
	},
	headline: {
		question: "Is there a job title under your name at the top?",
		title: "Headline title",
		problem: "There is no target title under the name, so the aim is unclear.",
		fix: "Add a short role title under your name that matches the job you want.",
	},
	email: {
		question:
			"Are you using a professional email address, like name.family@gmail.com?",
		title: "Professional email",
		problem: "The email looks casual and undercuts a professional impression.",
		fix: "Switch to a name based address such as name.family@gmail.com.",
	},
	links: {
		question: "Did you add your LinkedIn link?",
		title: "LinkedIn link",
		problem: "There is no LinkedIn or portfolio link to follow.",
		fix: "Add your LinkedIn URL, and a portfolio link if you have one.",
	},
	github: {
		question: "Does your GitHub link show real work?",
		title: "GitHub link",
		problem: "A GitHub link with no real activity adds nothing.",
		fix: "Link GitHub only when it shows real contributions, otherwise drop it.",
	},
	filename: {
		question: "Is the file named professionally?",
		title: "File name",
		problem: "A name like resume-final-v3.pdf looks careless.",
		fix: "Name the file Firstname-Lastname-Resume.pdf.",
	},
	summ: {
		question: "Did you keep the summary to two or three lines at most?",
		title: "Summary length",
		problem: "The summary is too long or missing, so the headline gets lost.",
		fix: "Write two to three lines stating your role, strengths, and target.",
	},
	buzzwords: {
		question: "Did you cut clichés and buzzwords?",
		title: "Clichés and buzzwords",
		problem: "Phrases like hardworking and team player say nothing.",
		fix: "Replace clichés with specific, provable achievements.",
	},
	exp: {
		question: "Did you list only the most relevant work experience?",
		title: "Relevant experience",
		problem: "Unrelated roles dilute the story and bury what matters.",
		fix: "Keep the roles that match the target job and trim the rest.",
	},
	ach: {
		question:
			"Did you list your achievements instead of your responsibilities?",
		title: "Achievements",
		problem: "Bullets describe duties, not results, so impact is invisible.",
		fix: "Rewrite each bullet as an achievement, with a number where you can.",
	},
	roleclarity: {
		question: "Is every role clear about the company and your title?",
		title: "Clear roles",
		problem: "A role is vague about the company or the title you held.",
		fix: "Name the company and your exact title for every role, with no vague entries.",
	},
	hist: {
		question: "Did you include the right amount of work history?",
		title: "Work history",
		problem: "The history runs too long or too thin for the target level.",
		fix: "Cover about the last ten years and focus on recent, relevant roles.",
	},
	firstperson: {
		question: "Did you keep pronouns out of your bullets?",
		title: "Pronouns",
		problem: "Bullets use I, my, or other pronouns, which reads informal.",
		fix: "Drop all pronouns and lead each bullet with an action verb.",
	},
	dates: {
		question: "Does every role show a start and end month and year?",
		title: "Dates",
		problem: "A role is missing a clear start or end month and year.",
		fix: "Show Month Year to Month Year for every role, consistently.",
	},
	gaps: {
		question: "Did you account for any gaps or overlaps between roles?",
		title: "Gaps and overlaps",
		problem: "There are unexplained gaps or overlapping dates between roles.",
		fix: "Explain breaks briefly and make sure role dates do not overlap by mistake.",
	},
	skill: {
		question: "Are your skills relevant to the role and coherent together?",
		title: "Relevant skills",
		problem: "The skills are off target or a scattered mix that lacks focus.",
		fix: "List skills that match the role and belong together, and cut the outliers.",
	},
	edu: {
		question: "Did you keep education to the degree and institution?",
		title: "Education",
		problem: "Education is missing, or padded with rankings and coursework.",
		fix: "List the degree and institution, and cut rankings and course lists.",
	},
	opt: {
		question: "Did you keep to the sections a recruiter expects?",
		title: "Expected sections",
		problem: "An unexpected or vanity section clutters the resume.",
		fix: "Drop sections a recruiter does not expect and keep the standard ones.",
	},
	personal: {
		question: "Did you remove personal details that do not belong?",
		title: "Personal details",
		problem: "Age, marital status, or a photo invite bias and waste space.",
		fix: "Remove personal details and let your work speak.",
	},
	len: {
		question: "Is your resume the right number of pages for your experience?",
		title: "Resume length",
		problem: "The page count does not fit the years of experience.",
		fix: "One page under ten years, two to three beyond, never more than three.",
	},
	dense: {
		question: "Is there enough white space to skim it fast?",
		title: "Readability",
		problem: "Long paragraphs and little white space make it hard to skim.",
		fix: "Use short bullets and white space so a recruiter can scan it fast.",
	},
	job: {
		question: "Did you tailor your resume to the needs of the job posting?",
		title: "Tailoring & ATS",
		problem: "The resume is generic and misses the posting keywords.",
		fix: "Tailor the wording to each posting and include its core keywords.",
	},
	verb: {
		question:
			"Did you start your achievements with action verbs and avoid repeating the same one?",
		title: "Action verbs",
		problem: "Bullets start weakly or repeat the same verb.",
		fix: "Open each bullet with a strong, varied action verb.",
	},
	gram: {
		question:
			"Did you run the text through Grammarly to catch spelling and grammar mistakes?",
		title: "Spelling & grammar",
		problem: "Spelling or grammar mistakes slip through and cost credibility.",
		fix: "Run the text through a grammar checker and fix every flag.",
	},
	references: {
		question: "Did you leave references off the resume?",
		title: "No references",
		problem:
			"A references section or an available on request line wastes space.",
		fix: "Remove references entirely; share them only when asked.",
	},
};
