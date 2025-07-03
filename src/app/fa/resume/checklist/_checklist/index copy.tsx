/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint no-use-before-define: 0 */
"use client";

import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import type { IChecklistGroup } from "./interfaces/i-checklist-group";

type IChecklistStatus = "completed" | "inProgress" | "notStarted";

interface IChecklistStatusMsg {
	type: IChecklistStatus;
	completed: number;
	total: number;
}

interface IChecklistProps {
	name: string;
	list: IChecklistGroup[];
}

export function Checklist({ name, list }: IChecklistProps) {
	const [taskList, setTaskList] = useState(list);

	const handleTaskClick = (index: number) => {
		const updatedTasks = [...taskList];
		updatedTasks[index] = {
			...updatedTasks[index],
			// status: !updatedTasks[index].status,
		};
		setTaskList(updatedTasks);
	};

	const isAllCompleted = taskList.every((task) => task.status);
	const isSomeChecked = taskList.some((task) => task.status);

	const _listStatusType: IChecklistStatus = isAllCompleted
		? "completed"
		: isSomeChecked
			? "inProgress"
			: "notStarted";

	const _totalTasks = taskList.length;
	const _completedTasks = taskList.filter((task) => task.status).length;

	return (
		<div className="select-none">
			{taskList.map((task, index) => (
				<div key={task.id} className="px-2">
					<input
						className="hidden"
						type="checkbox"
						id={`task_${index + 1}`}
						// checked={task.status || false}
						onChange={() => handleTaskClick(index)}
					/>
					<label
						className="flex gap-2 items-center px-4 py-2 rounded-lg cursor-pointer transition hover:bg-gray-100"
						htmlFor={`task_${index + 1}`}
					>
						{task.status ? (
							<CheckCircleIcon className="w-5 h-5 text-green-500" />
						) : (
							<QuestionMarkCircleIcon className="w-5 h-5 text-gray-300" />
						)}
						<span className="text-xs md:text-sm leading-5">{task.title}</span>
					</label>
				</div>
			))}
		</div>
	);
}
