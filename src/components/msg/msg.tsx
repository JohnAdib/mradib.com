import clsx from 'clsx';
import { getMsgSeverityColor } from './severity-colors';
import { MsgSeverityIcon } from './severity-icon';

export type SeverityType = 'info' | 'success' | 'warning' | 'error';
interface IMsg {
  title?: string;
  severity?: SeverityType;
  children: React.ReactNode;
}

function MsgTitle({ children }: { children: React.ReactNode })
  : JSX.Element | null {
  if (!children) {
    return null;
  }
  return (
    <h3 className="text-sm font-medium">{children}</h3>
  );
}

export function Msg({
  title,
  severity = 'info',
  children,
}: IMsg,
): JSX.Element | null {
  if (!children) {
    return null;
  }

  const colors = getMsgSeverityColor(severity);

  return (
    <div className={clsx(
      'rounded-md p-4',
      'flex gap-3',
      'items-center',
      'mt-6',
      'mb-4',
      'select-none',
      colors.bg,
    )}>
      <div className={colors.icon}>
        <MsgSeverityIcon severity={severity} />
      </div>
      <div className={clsx(
        'flex flex-col',
        'gap-2',
        colors.text,
      )}>
        <MsgTitle>{title}</MsgTitle>
        <div
          className={clsx(
            'text-sm',
          )}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
