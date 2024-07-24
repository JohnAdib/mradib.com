import clsx from 'clsx';
import { IChecklistGroupItem } from '../../interfaces/i-checklist-group-item';
import { ChecklistGroupDesc } from '../group/group-desc';
import { ChecklistGroupTitle } from '../group/group-title';
import { ChecklistSpecialMsg } from '../group/special-msg';

interface IChecklistItemProps {
  item: IChecklistGroupItem;
}

export function ChecklistItem({
  item,
}: IChecklistItemProps) {

  return (
    <div className={
      clsx(
        'my-6 lg:my-12',
      )
    }>
      <ChecklistGroupTitle title={item.title} />
      <ChecklistGroupDesc desc={item.desc} />

      <ChecklistSpecialMsg
        status={item.status}
        unknownNote={item.unknownNote}
        passedNote={item.passedNote}
        failedNote={item.failedNote}
      />
    </div>
  );
}
