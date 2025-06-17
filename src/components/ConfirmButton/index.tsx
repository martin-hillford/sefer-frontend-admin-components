import { ReactNode } from 'react';
import { DeleteButton } from '../DeleteButton';

type Props = {
    onConfirmed : () => Promise<boolean>;
    variant : 'default' | 'primary' | 'success' | 'info' | 'warning' | 'danger' | 'selected',
    confirm: string;
    processing : string;
    completed : string;
    label? : string;
    icon? : ReactNode
    header : string
    onClosed? : () => void;
    disabled? : boolean;
}

export const ConfirmButton = (props : Props) => {
  const { completed, confirm, header, onConfirmed, processing, variant, disabled, icon, label, onClosed } = props;

  // Note: the confirm button offers basically the same functionality as the delete button.
  // However, is some contexts is it really strange to have a delete button. thus the confirm button
  // wraps around the delete button.
  return (
    <DeleteButton
      onDelete={onConfirmed}
      confirm={confirm}
      deleted={completed}
      deleting={processing}
      disabled={disabled}
      header={header}
      icon={icon}
      label={label ?? ''}
      onClosed={onClosed}
      variant={variant}
    />
  );
};
