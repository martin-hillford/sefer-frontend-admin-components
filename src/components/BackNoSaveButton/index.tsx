import { useNavigate } from "storybook/internal/router";
import { useLocalization } from "../../hooks/useLocalization";
import { ChevronLeft } from '../../icons';
import { useState } from 'react';
import { DataContext } from "../../types/DataContext";
import { localization } from './localization';
import { Button } from "../Button";
import { ConfirmDialog } from "../ConfirmDialog";

interface Props<T> {
  context?: DataContext<T>,
  onHasChanges?: () => boolean,
  url?: string,
  back?: () => void
}

export function BackNoSaveButton<T>(props: Props<T>) {
  const { context, url, back, onHasChanges } = props;
  const navigate = useNavigate();
  const terms = useLocalization(localization);

  const [state, setState] = useState('default');
  const onCanceled = () => setState('default');

  const onConfirmed = () => {
    if (url) return navigate(url);
    if (back) return back();
    return null;
  };

  const hasChanges = () => {
    if (onHasChanges) return onHasChanges();
    if (context?.hasChanges) return context.hasChanges();
    return false;
  };

  const onBack = () => {
    if (!hasChanges()) return onConfirmed();
    return setState('back');
  };

  return (
    <>
      <Button icon={<ChevronLeft size={23} />} onClick={onBack} label={terms.back} />
      {state === 'back' && <NotSaved onCanceled={onCanceled} onConfirmed={onConfirmed} />}
    </>
  );
}

const NotSaved = (props: { onCanceled: () => void, onConfirmed: () => void }) => {
  const { onCanceled, onConfirmed } = props;
  const terms = useLocalization(localization);
  return (
    <ConfirmDialog
      {...terms}
      onCanceled={onCanceled}
      onConfirmed={onConfirmed}
    />
  );
};
