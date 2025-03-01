import { getAllActionVerbs } from "./get-all-action-verbs";
import { IListActionVerbs } from "./interface";

export function ListActionVerbs(): JSX.Element {
	// draw html grid
	const allActionVerbs: IListActionVerbs[] = getAllActionVerbs();

	// foreach kind of myVerbs in myVerbList draw a section
	return (
		<>
			{allActionVerbs.map((verbsGroup, index) => {
				return (
					<section key={index} dir="ltr" className="leading-relaxed">
						<h2>{verbsGroup.title}</h2>
						<p>{verbsGroup.description}</p>
						<div className="grid gap-1 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:md:grid-cols-5">
							{verbsGroup.list.map((verb2, index2) => (
								<span key={index2}>{verb2}</span>
							))}
						</div>
					</section>
				);
			})}
		</>
	);
}
