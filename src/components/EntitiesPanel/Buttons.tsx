import { useLocalization } from "../../hooks/useLocalization";
import { Plus } from "../../icons";
import { Button } from "../Button";
import { ButtonGroup } from "../ButtonGroup";
import { SortingButton } from "../SortingButton";
import { ButtonProps } from './types';
import { localization } from './localization';

export const Buttons = (props: ButtonProps) => {
  const { onAddClick, onAddLabel, onAddIcon, sort, setSorting, sorting, additionalButtons } = props;
  const icon = onAddIcon || <Plus size={16} />;
  const terms = useLocalization(localization);
  const label = onAddLabel || terms.add;

  const onAddButtonClick = () => {
    if (onAddClick) onAddClick();
  };

  if (!onAddClick && !sort && !additionalButtons) return <div style={{ height: '38px' }} />;
  return (
    <ButtonGroup $pull="right">
      <Button show={!!onAddClick} icon={icon} variant="default" label={label} onClick={onAddButtonClick} />
      {sort && (
        <SortingButton
          {...sort}
          saved={sort.completed}
          saving={sort.inProgress}
          setSorting={setSorting}
          sorting={sorting}
        />
      )}
      {additionalButtons}
    </ButtonGroup>
  );
};
