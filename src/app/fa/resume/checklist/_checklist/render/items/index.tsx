import clsx from 'clsx';
import { IChecklistGroupItem } from '../../interfaces/i-checklist-group-item';
import { ChecklistGroupDesc } from '../group/group-desc';
import { ChecklistGroupTitle } from '../group/group-title';
import { ChecklistSpecialMsg } from '../group/special-msg';

interface IChecklistGroupProps {
  items: IChecklistGroupItem[];
}

export function ChecklistItems({
  items,
}: IChecklistGroupProps) {

  return (
    <div className={
      clsx(
        'my-6 lg:my-12',
      )
    }>
      <ChecklistGroupTitle title={items.title} />
      <ChecklistGroupDesc desc={items.desc} />

      <ChecklistSpecialMsg
        status={items.status}
        unknownNote={items.unknownNote}
        passedNote={items.passedNote}
        failedNote={items.failedNote}
      />
    </div>
  );
}
