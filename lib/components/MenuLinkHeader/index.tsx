import { ReactElement } from 'react';
import { Label, MenuHeader } from '../MenuHeader';

type MenuLinkHeaderProps = {
    icon? : ReactElement | null,
    label : string,
    collapsed : boolean,
    href : string
}

export const MenuLinkHeader = ({ icon, label, collapsed, href } : MenuLinkHeaderProps) => {
  const content = <Content icon={icon} label={label} />;
  return (
    <MenuHeader $collapsed={collapsed}>
      <a href={href}>{content}</a>
    </MenuHeader>
  );
};

const Content = ({ icon, label } : {icon? : ReactElement | null, label : string }) => <>{icon}<Label>{label}</Label></>;
