import type { IListActionVerbs } from "./interface";
import listActionVerbs from "./list-action-verbs.json";

export function getAllActionVerbs(): IListActionVerbs[] {
	return listActionVerbs as IListActionVerbs[];
}
