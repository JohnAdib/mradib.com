import clsx from 'clsx';

interface IChecklistGroupTitleProps {
  title: string | React.ReactNode;
}

export function ChecklistGroupTitle({
  title,
}: IChecklistGroupTitleProps,
): JSX.Element | null {
  if (!title) {
    return null;
  }

  return (
    <div className={clsx(
      'border-b',
      'border-gray-300 dark:border-gray-700',
    )}>
      <h2 className={clsx(
        'select-none',
        'leading-loose',
        'my-0',
      )}>
        <span className={clsx(
          'inline-block',
          'border-b-4',
          'border-blue-500',
          'px-2',
        )}>
          {title}
        </span>
      </h2>
    </div>
  );
}
