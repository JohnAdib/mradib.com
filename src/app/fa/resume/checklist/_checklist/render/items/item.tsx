import clsx from 'clsx';
import { IChecklistGroupItem } from '../../interfaces/i-checklist-group-item';
import { ChecklistSpecialMsg } from '../group/special-msg';
import { ChecklistItemCheckbox } from './item-checkbox';

interface IChecklistItemProps {
  item: IChecklistGroupItem;
  itemId: string;
}

export function ChecklistItem({
  item,
  itemId,
}: IChecklistItemProps) {

  return (
    <div className={
      clsx(
        'my-1 lg:my-2',
      )
    }>
      <ChecklistItemCheckbox item={item} itemId={itemId} />

      <ChecklistSpecialMsg
        status={item.status}
        unknownNote={item.unknownNote}
        passedNote={item.passedNote}
        failedNote={item.failedNote}
      />
    </div>
  );
}
