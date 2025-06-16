import { useState } from 'react';
import { State } from '../../types/State';
import { useLocalization } from "../../hooks/useLocalization";
import { localization } from './localization';
import { SavingAlert } from '../SavingAlert';
import { SavedAlert } from '../SavedAlert';
import { Button } from '../Button';

interface Props {
    onSave : () => Promise<boolean>;
    onValidate? : () => Promise<boolean>;
    variant? : 'default' | 'primary' | 'success' | 'info' | 'warning' | 'danger' | 'selected',
    saving? : string;
    saved? : string;
    label? : string;
    onClosed? : () => void;
}

export const SaveButton = (props : Props) => {
  const { saving, saved, label, onClosed } = props;
  const [state, setState] = useState<State>(State.Editing);
  const { onSave, onValidate, variant } = props;
  const terms = useLocalization(localization);

  const savingMsg = saving ?? terms.saving;
  const savedMsg = saved ?? terms.saved;
  const labelMsg = label ?? terms.label;

  const onClosedHandler = () => {
    setState(State.Editing);
    if (onClosed) onClosed();
  };

  const onClick = async () => {
    if (onValidate && !await onValidate()) return;
    setState(State.Saving);
    const result = await onSave();
    if (result) setState(State.Saved);
    else setState(State.Editing);
  };

  return (
    <>
      <Button label={labelMsg} onClick={onClick} variant={variant ?? 'primary'} />
      <SavingAlert show={state === State.Saving} content={savingMsg} />
      <SavedAlert show={state === State.Saved} variant={variant} content={savedMsg} onClosed={onClosedHandler} />
    </>
  );
};
