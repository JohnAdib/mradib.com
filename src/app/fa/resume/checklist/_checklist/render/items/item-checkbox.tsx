import { CheckCircleIcon, QuestionMarkCircleIcon } from '@heroicons/react/20/solid';
import { IChecklistGroupItem } from '../../interfaces/i-checklist-group-item';

interface IChecklistItemCheckboxProps {
  item: IChecklistGroupItem;
  itemId: string;
}

export function ChecklistItemCheckbox({
  item,
  itemId,
}: IChecklistItemCheckboxProps) {
  return (
    <div className="px-1">
      <input
        className="hidden"
        type="checkbox"
        id={itemId}
        checked={!item.status}
      // onChange={() => handleTaskClick(index)}
      />
      <label
        className="flex gap-2 items-center px-4 py-2 rounded-lg cursor-pointer transition hover:bg-gray-100 dark:hover:bg-gray-800"
        htmlFor={itemId}
      >
        {item.status ?
          <CheckCircleIcon className="w-5 h-5 text-green-500" />
          :
          <QuestionMarkCircleIcon className="w-5 h-5 text-gray-300" />
        }
        <span className="text-xs md:text-sm leading-5"><b>{item.title}</b> {item.desc}</span>
      </label>
    </div>
  );
}