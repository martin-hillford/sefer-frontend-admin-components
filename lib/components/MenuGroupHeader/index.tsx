import { MouseEventHandler, ReactElement } from 'react';
import { Label, MenuHeader } from '../MenuHeader';

type MenuGroupHeaderProps = {
    icon : ReactElement,
    label? : string,
    collapsed : boolean,
    onClick : MouseEventHandler
}

export const MenuGroupHeader = (props : MenuGroupHeaderProps) => {
  const { icon, label, collapsed, onClick } = props;
  return (
    <MenuHeader $collapsed={collapsed}>
      <div onClick={onClick}>
        {icon}
        <Label>{label}</Label>
      </div>
    </MenuHeader>
  );
};
