import { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { Label, MenuHeader } from '../MenuHeader';

type MenuLinkHeaderProps = {
    icon : ReactElement,
    label : string,
    collapsed : boolean,
    href : string
}

export const MenuLinkHeader = ({ icon, label, collapsed, href } : MenuLinkHeaderProps) => {
  const isExternal = href.startsWith('http');
  const content = <Content icon={icon} label={label} />;
  return (
    <MenuHeader $collapsed={collapsed}>
      {isExternal && <a href={href}>{content}</a> }
      {!isExternal && <Link to={href}>{content}</Link>}
    </MenuHeader>
  );
};

const Content = ({ icon, label } : {icon : ReactElement, label : string }) => <>{icon}<Label>{label}</Label></>;
