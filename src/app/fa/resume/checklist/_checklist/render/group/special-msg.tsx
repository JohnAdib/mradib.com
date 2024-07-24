import { Msg } from '@/components/msg/msg';
import { ChecklistItemStatusType } from '../../interfaces/type-checklist-item-status';

interface IChecklistGroupDescProps {
  status?: ChecklistItemStatusType;
  passedNote?: string | React.ReactNode;
  failedNote?: string | React.ReactNode;
  unknownNote?: string | React.ReactNode;
}

export function ChecklistSpecialMsg({
  status,
  unknownNote,
  passedNote,
  failedNote,
}: IChecklistGroupDescProps,
): JSX.Element | null {

  switch (status) {

    case 'passed':
      return <Msg severity='success'>{passedNote}</Msg>;

    case 'failed':
      return <Msg severity='error'>{failedNote}</Msg>;

    case 'unknown':
    default:
      return <Msg severity='info'>{unknownNote}</Msg>;
  }
}
