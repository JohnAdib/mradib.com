"use client";

import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { Msg } from "../msg/msg";
import { ITodo } from "./interface";

type ITodoStatus = "completed" | "inProgress" | "notStarted";

interface ITodoStatusMsg {
  type: ITodoStatus;
  completed: number;
  total: number;
}

function TodoStatus({ type, completed, total }: ITodoStatusMsg) {
  const percentage = Math.round((completed / total) * 100);

  if (type === "completed") {
    return (
      <Msg severity="success">
        تبریک! همه کارهایی که لیست کرده بودم رو انجام دادی!
      </Msg>
    );
  }
  if (type === "inProgress") {
    return (
      <Msg severity="info">
        <span>با دقت دونه به دونه کارها رو انجام بده.</span>
        <span className="text-xs">({percentage}% انجام شده)</span>
      </Msg>
    );
  }

  return (
    <Msg severity="warning">
      بیا کارها رو شروع کنیم! کافیه روی هر کدوم کلیک کنی.
    </Msg>
  );
}

export function Todo({ list }: { list: ITodo[] }) {
  const [taskList, setTaskList] = useState(list);

  const handleTaskClick = (index: number) => {
    const updatedTasks = [...taskList];
    updatedTasks[index] = {
      ...updatedTasks[index],
      completed: !updatedTasks[index].completed,
    };
    setTaskList(updatedTasks);
  };

  const isAllCompleted = taskList.every((task) => task.completed);
  const isSomeChecked = taskList.some((task) => task.completed);

  const listStatusType: ITodoStatus = isAllCompleted
    ? "completed"
    : isSomeChecked
      ? "inProgress"
      : "notStarted";

  const totalTasks = taskList.length;
  const completedTasks = taskList.filter((task) => task.completed).length;

  return (
    <div className="select-none">
      <TodoStatus
        type={listStatusType}
        total={totalTasks}
        completed={completedTasks}
      />

      {taskList.map((task, index) => (
        <div key={index} className="px-2">
          <input
            className="hidden"
            type="checkbox"
            id={`task_${index + 1}`}
            checked={task.completed}
            onChange={() => handleTaskClick(index)}
          />
          <label
            className="flex gap-2 items-center px-4 py-2 rounded-lg cursor-pointer transition hover:bg-gray-100"
            htmlFor={`task_${index + 1}`}
          >
            {task.completed ? (
              <CheckCircleIcon className="w-5 h-5 text-green-500" />
            ) : (
              <QuestionMarkCircleIcon className="w-5 h-5 text-gray-300" />
            )}
            <span className="text-xs md:text-sm leading-5">{task.item}</span>
          </label>
        </div>
      ))}
    </div>
  );
}
