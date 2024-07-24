import clsx from 'clsx';
import { IChecklistGroup } from '../../interfaces/i-checklist-group';
import { ChecklistGroupDesc } from './group-desc';
import { ChecklistGroupTitle } from './group-title';
import { ChecklistSpecialMsg } from './special-msg';

interface IRenderChecklistGroupProps {
  id: string;
  group: IChecklistGroup;
}

export function RenderChecklistGroup({
  id,
  group,
}: IRenderChecklistGroupProps) {
  const groupId = `${id}-${group.id}`;

  return (
    <div id={groupId} className={
      clsx(
        'my-6 lg:my-12',
      )
    }>
      <ChecklistGroupTitle title={group.title} />
      <ChecklistGroupDesc desc={group.desc} />

      <ChecklistSpecialMsg
        status={group.status}
        unknownNote={group.unknownNote}
        passedNote={group.passedNote}
        failedNote={group.failedNote}
      />
    </div>
  );
}
