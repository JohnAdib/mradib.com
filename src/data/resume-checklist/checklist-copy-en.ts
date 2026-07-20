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
	cont: {
		question: "Does the contact section include all the essential details?",
		title: "Contact details",
		problem: "Key contact details are missing or hard to find.",
		fix: "Add full name, phone, professional email, city, and LinkedIn at the top.",
	},
	email: {
		question:
			"Are you using a professional email address, like name.family@gmail.com?",
		title: "Professional email",
		problem: "The email looks casual and undercuts a professional impression.",
		fix: "Switch to a name based address such as name.family@gmail.com.",
	},
	links: {
		question: "Did you add a LinkedIn or portfolio link?",
		title: "Profile links",
		problem: "There is no link to a profile or work sample.",
		fix: "Add your LinkedIn URL, and a portfolio or GitHub link if relevant.",
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
	hist: {
		question: "Did you include the right amount of work history?",
		title: "Work history",
		problem: "The history runs too long or too thin for the target level.",
		fix: "Cover about the last ten years and focus on recent, relevant roles.",
	},
	firstperson: {
		question: "Did you avoid first person pronouns in your bullets?",
		title: "First person pronouns",
		problem: "Bullets start with I or My, which reads informal.",
		fix: "Drop the pronouns and lead each bullet with an action verb.",
	},
	dates: {
		question: "Are the dates present and consistent?",
		title: "Dates",
		problem: "Roles are missing dates or the date format is inconsistent.",
		fix: "Use a consistent Month Year to Month Year for every role.",
	},
	gaps: {
		question: "Did you address any employment gaps?",
		title: "Employment gaps",
		problem: "There are unexplained gaps between roles.",
		fix: "Briefly note breaks or reframe them as freelance, study, or caregiving.",
	},
	skill: {
		question:
			"Did you list the skills that match the role you are applying for?",
		title: "Relevant skills",
		problem: "The skills listed do not match what the job asks for.",
		fix: "Mirror the key skills from the posting that you genuinely have.",
	},
	edu: {
		question: "Did you include your education in the resume?",
		title: "Education",
		problem: "Education is missing or placed where it distracts.",
		fix: "List your degree and institution, and keep it short once you have experience.",
	},
	opt: {
		question: "Did you add the other important sections to your resume?",
		title: "Extra sections",
		problem: "Helpful sections like projects, awards, or languages are absent.",
		fix: "Add the optional sections that strengthen your case for this role.",
	},
	personal: {
		question: "Did you remove personal details that do not belong?",
		title: "Personal details",
		problem: "Age, marital status, or a photo invite bias and waste space.",
		fix: "Remove personal details and let your work speak.",
	},
	len: {
		question: "Is your resume one to two pages long?",
		title: "Resume length",
		problem: "The resume runs too long or too short for its content.",
		fix: "Keep it to one page early on, and two pages at most later.",
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
	read: {
		question: "Did you read through your whole resume yourself?",
		title: "Self review",
		problem: "The resume has not had a careful read through.",
		fix: "Read it end to end out loud to catch flow and gaps.",
	},
	gram: {
		question:
			"Did you run the text through Grammarly to catch spelling and grammar mistakes?",
		title: "Spelling & grammar",
		problem: "Spelling or grammar mistakes slip through and cost credibility.",
		fix: "Run the text through a grammar checker and fix every flag.",
	},
	peer: {
		question:
			"Did you share the resume with a few friends and ask for their feedback?",
		title: "Peer feedback",
		problem: "No one else has reviewed the resume yet.",
		fix: "Ask a few trusted people to read it and act on their feedback.",
	},
	references: {
		question: "Did you drop the references available on request line?",
		title: "References line",
		problem: "That line is outdated and wastes a row.",
		fix: "Remove it; share references only when asked.",
	},
};
