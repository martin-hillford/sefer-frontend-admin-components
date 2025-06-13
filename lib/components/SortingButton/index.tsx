import { Button, SavedAlert, SavingAlert } from '../';
import { useState } from 'react';
import { MenuHamburger } from '../../icons';

type Props = {
    sorting: boolean,
    setSorting: (sort: boolean) => void
    save: () => Promise<void>
    saved : string;
    saving: string;
    disabled? : boolean;
    onClosed? : () => void
}

export const SortingButton = (props : Props) => {
  const { sorting, setSorting, save, saved, saving, disabled, onClosed, } = props;
  const [state, setState] = useState('default');
  const variant = sorting ? 'selected' : 'default';

  const onClosedHandler = () => {
    setState('default');
    if (onClosed) onClosed();
  };

  const onClick = async () => {
    if (!sorting) return setSorting(true);
    setState('saving');
    await save();
    setState('saved');
    return setSorting(false);
  };

  return (
    <>
      <Button disabled={disabled} onClick={onClick} variant={variant} icon={<MenuHamburger size={20} />} />
      <SavingAlert show={state === 'saving'} content={saving} />
      <SavedAlert show={state === 'saved'} onClosed={onClosedHandler} content={saved} />
    </>
  );
};
