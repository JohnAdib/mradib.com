import { CheckCircleIcon, QuestionMarkCircleIcon, XCircleIcon } from '@heroicons/react/20/solid';
import { ChecklistItemStatusType } from '../../interfaces/type-checklist-item-status';

interface IChecklistItemCheckboxIconProps {
  status: ChecklistItemStatusType;
}

export function ChecklistItemCheckboxIcon({ status,

}: IChecklistItemCheckboxIconProps,
): JSX.Element | null {
  switch (status) {
    case 'passed':
      return <CheckCircleIcon className="w-5 h-5 text-green-500" />;

    case 'failed':
      return <XCircleIcon className="w-5 h-5 text-red-400" />;

    case 'unknown':
    default:
      return <QuestionMarkCircleIcon className="w-5 h-5 text-gray-300 dark:text-gray-600" />;

  }
}
