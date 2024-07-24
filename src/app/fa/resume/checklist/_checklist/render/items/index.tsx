import clsx from 'clsx';
import { IChecklistGroupItem } from '../../interfaces/i-checklist-group-item';
import { ChecklistItem } from './item';

interface IChecklistItemsProps {
  groupId: string;
  items: IChecklistGroupItem[];
}

export function ChecklistItems({
  groupId,
  items,
}: IChecklistItemsProps) {

  // foreach item, render item
  const GroupItems = items.map((item) => {
    const itemId = `${groupId}-${item.id}`;
    return <ChecklistItem key={itemId} item={item} />;
  });

  return (
    <div className={
      clsx(
        'my-6 lg:my-12',
      )
    }>
      {GroupItems}
    </div>
  );
}
