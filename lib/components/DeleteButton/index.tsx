import { Button, ConfirmDialog, SavedAlert, SavingAlert } from '../';
import { ReactNode, useState } from 'react';
import { useLocalization } from "../../hooks/useLocalization";
import { State } from "../../types/State";
import { localization } from './localization';

type Props = {
    onDelete : () => Promise<boolean>;
    variant? : 'default' | 'primary' | 'success' | 'info' | 'warning' | 'danger' | 'selected',
    confirm?: string;
    deleting? : string;
    deleted? : string;
    label? : string;
    icon? : ReactNode
    header? : string
    onClosed? : () => void;
    disabled? : boolean;
}

export const DeleteButton = (props : Props) => {
  const [state, setState] = useState<State>(State.Editing);
  const terms = useLocalization(localization);
  const { onDelete, variant = 'danger', disabled, deleting = terms.deleting, deleted = terms.deleted } = props;
  const { confirm = terms.confirm, label = terms.delete, header = terms.header, icon, onClosed } = props;

  const buttonLabel = label || (icon ? undefined : 'Verwijderen');
  const onConfirm = () => setState(State.Confirming);
  const onCanceled = () => setState(State.Editing);

  const onConfirmed = async () => {
    setState(State.Deleting);
    const result = await onDelete();
    if (result) setState(State.Deleted);
    else setState(State.Editing);
  };

  const onClosedHandler = () => {
    setState(State.Editing);
    if (onClosed) onClosed();
  };

  return (
    <>
      <Button disabled={disabled} label={buttonLabel} icon={icon} onClick={onConfirm} variant={variant} />
      <SavingAlert show={state === State.Deleting} content={deleting} />
      <SavedAlert show={state === State.Deleted} variant="success" content={deleted} onClosed={onClosedHandler} />
      <ConfirmDialog
        show={state === State.Confirming}
        content={confirm}
        buttonText={label}
        onCanceled={onCanceled}
        onConfirmed={onConfirmed}
        header={header}
        variant={variant}
      />
    </>
  );
};
