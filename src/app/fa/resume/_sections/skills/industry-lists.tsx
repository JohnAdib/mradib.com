import type { JSX } from "react";
import { Accordion } from "@/components/accordion/accordion";
import { Pre } from "@/components/syntax-highlighter/pre";

export function IndustryLists(): JSX.Element {
	return (
		<Accordion title="مهارت‌ها به تفکیک صنعت">
			<h4>مهارت‌های بازاریابی</h4>
			<Pre language="plaintext">
				Data analysis, Web analytics, SEO/SEM, HTML & CSS, Wordpress, Email
				marketing, Web scraping, CRO and A/B Testing Data visualization &
				pattern-finding through critical thinking, Search Engine and Keyword
				Optimization, Project/campaign management, Social media and mobile
				marketing,Paid social media advertisements, B2B Marketing, The 4 P-s of
				Marketing, Consumer Behavior Drivers, Brand management, Creativity,
				Copywriting, Storytelling, Sales, CMS Tools
			</Pre>

			<h4>مهارت‌های مدیریتی</h4>
			<Pre language="plaintext">
				Six Sigma techniques, The McKinsey 7s Framework, Porter’s Five Forces,
				PESTEL, Emotional Intelligence,Dealing with work-related stress,
				Motivation, Task delegation, Technological savviness, People management,
				Business Development, Strategic Management, Negotiation, Planning,
				Proposal writing, Problem-solving, Innovation, Charisma
			</Pre>

			<h4>مهارت‌های فروش</h4>
			<Pre language="plaintext">
				Customer Relationship Management (CRM), Cold-calling, Negotiation,
				Public speaking, Closing, Lead generation, Buyer-Responsive selling,
				Buyer engagement, Product knowledge, Persuasion, Effective communication
				and sociability, Empathy, Social media/digital communication, Teamwork,
				Time management
			</Pre>

			<h4>مهارت‌های طراحی</h4>
			<Pre language="plaintext">
				Adobe Creative Suite: Illustrator, InDesign, Photoshop, Dreamweaver,
				Infographics, HTML & CSS, Photo editing, Typography: spacing, line
				height, layout, choosing fonts, Storyboarding, Targeting and marketing
				through visual communications, Logo creation, Digital printing,
				Integration of visual communication in social media platforms,
				Creativity, Attention to detail & aesthetics, Interactive media design,
				Color sense & theory, Ad design, Active listening
			</Pre>

			<h4>مهارت‌های فنی پایه</h4>
			<Pre language="plaintext">
				Microsoft Office Pack: Word, Excel, Access, Publisher, Outlook,
				Powerpoint, Filing and paper management, Data entry, Bookkeeping through
				Excel or TurboTax, Research and data analysis, Basic knowledge of user
				interface communication, Technical writing, Cloud networking and file
				sharing
			</Pre>

			<h4>مهارت‌های حسابداری و مالی</h4>
			<Pre language="plaintext">
				Microsoft Excel (Advanced), Enterprise Resource Planning, Big Data
				Analysis & SQL, Know Your Customers (KYC), Cognos Analytics (IBM),
				Visual Basic, Accounting Software, Revenue recognition, Anti Money
				Laundering, Clear communication, General business knowledge, Numerical
				competence, Accuracy, Attention to detail
			</Pre>

			<h4>مهارت‌های آموزشی</h4>
			<Pre language="plaintext">
				Updated curriculum knowledge, Research & Data analysis, Communication,
				Educational platforms (software like Elearn), Stress management,
				Technological & digital literacy, Patience, Critical thinking,
				Enthusiasm, Motivation
			</Pre>

			<h4>مهارت‌های طراحی وب</h4>
			<Pre language="plaintext">
				HTML/CSS, CSS preprocessors, Javascript, Wordpress, Graphic User
				Interfaces (GUI), Git/Version control (Github, gitlab), Search Engine
				Optimization (SEO), Application Programming Interface (API), Adobe
				Photoshop, InDesign, Content Management Systems (CMS),
				Testing/Debugging, Responsive design principles
			</Pre>

			<h4>مهارت‌های آنالیز بیزینس</h4>
			<Pre language="plaintext">
				SQL (a must) and Hive (optional), Programming language (R, Python,
				Scala, Matlab), STATA, SPSS, SAS, Data Mapping, Entity Relationship
				Diagrams, Wireframes, Big Data tools, Microsoft Visio, Agile Business
				Analysis, Machine learning, System Context Diagrams, Business Process
				Modeling, Technical and non-technical communication
			</Pre>

			<h4>مهارت‌های پرستاری و مراقبت‌های بهداشتی</h4>
			<Pre language="plaintext">
				Mathematics, CPR, Patient care and assistance, Paperwork/record-keeping
				abilities, Compassion, Advanced Cardiac, Life Support (ACLS), Telemetry,
				Attention to detail, Physical endurance, Acute care, Infection control,
				Surgery preparation
			</Pre>
		</Accordion>
	);
}
