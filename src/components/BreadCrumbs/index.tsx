import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Colors } from '../../types/Colors';

export type BreadCrumb = {
    label : string,
    active? : boolean,
    link? : string
    icon? : ReactNode,
}

export type BreadCrumbProps = {
    icon : ReactNode,
    crumbs : Array<BreadCrumb>
}

export const BreadCrumbs = ({ crumbs, icon } : BreadCrumbProps) => (
  <Container>
    <Crumbs>
      { crumbs.map((c, i) => <Crumb icon={icon} key={c.label + i} index={i} crumb={c} />)}
    </Crumbs>
  </Container>
);

const Container = styled.div`
    display: flex;
    flex: 1 1 auto;
    height: 39px;
    margin: 0 0 23px;
    user-select: none;
`;

const Crumb = (props : { crumb : BreadCrumb, index : number, icon : ReactNode}) => {
  const { crumb, index, icon } = props;
  const icnContent = index === 0 ? icon : null;
  return (
    <>
      { index !== 0 && <Sep>/</Sep> }
      { crumb.link && <InActiveCrumb icon={icnContent} crumb={crumb} /> }
      { !crumb.link && <ActiveCrumb icon={icnContent} crumb={crumb} /> }
    </>
  );
};

const InActiveCrumb = ({ crumb, icon } : { crumb : BreadCrumb, icon : ReactNode}) => (
  <InActive>
    {icon && <Icon>{icon}</Icon>}
    {crumb.icon && <Icon>{crumb.icon}</Icon>}
    <Link to={crumb.link as string}>{crumb.label}</Link>
  </InActive>
);

const ActiveCrumb = ({ crumb, icon } : { crumb : BreadCrumb, icon : ReactNode}) => (
  <Active>
    {icon && <Icon>{icon}</Icon>}
    {crumb.icon && <Icon>{crumb.icon}</Icon>}
    <span>{crumb.label}</span>
  </Active>
);

const Icon = styled.span`
    height: 23px;
    padding-right: 10px;
    margin-top:-2px;
`;

const Crumbs = styled.div`
    margin: 0;
    padding: 8px 15px;
    border-radius: 3px;
    height: 39px;
    width:100%;
    background-color: #f9f9f9;
    font-size: 13px;
    line-height: 23px;
    display: flex;
    overflow:hidden;
`;

const InActive = styled.div`
    color: ${Colors.Blue};
`;

const Active = styled.div`
    color: #bbbbbb;
`;

const Sep = styled.div`
    padding: 0 8px;
    color: #bbbbbb;
`;
