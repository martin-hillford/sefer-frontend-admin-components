import { ReactNode, RefObject, useRef, useState } from 'react';
import styled from 'styled-components';
import { BreadCrumb, BreadCrumbs } from "../BreadCrumbs";
import { Navigation } from "../Navigation";
import { PageHeader } from "../PageHeader";
import { ScrollContext } from '../../context/ScrollContext';


type BaseLayoutProps = {
    children : ReactNode,
    title : string,
    subTitle? : string
    crumbs : Array<BreadCrumb>,
    icon : ReactNode,
}

export const BaseLayout = (props : BaseLayoutProps) => {
  const [collapsed, setCollapsed] = useState(true);
  const ref = useRef<HTMLDivElement>(null);

  return (
    <Container>
      <Navigation collapsed={collapsed} onToggleCollapsed={setCollapsed} />
      <Main $blurred={!collapsed}>
        <ScrollPanel id="ref-scrollpanel" ref={ref}>
          <Content {...props} panel={ref} />
        </ScrollPanel>
      </Main>
    </Container>
  );
};

const Content = (props : BaseLayoutProps & { panel : RefObject<HTMLDivElement | null> | null }) => {
  const { children, title, subTitle, crumbs, icon, panel } = props;
  return (
    <ScrollContext.Provider value={panel?.current}>
      <PageHeader title={title} subTitle={subTitle} />
      <BreadCrumbs icon={icon} crumbs={crumbs} />
      <div>{children}</div>
    </ScrollContext.Provider>
  );
};

export const ScrollPanel = styled.div`
    height:100vh;
    overflow: auto;
    padding: 0 15px;
`;

export const Container = styled.div`
    height:100vh;
    width:100vw;
    padding:0;
    margin:0;
    display: flex;
    overflow: hidden;
`;

export const Main = styled.div<{ $blurred : boolean }>`
    box-sizing: border-box;
    left: 58px;
    position: absolute;
    z-index: 1;
    width: calc(100vw - 58px);
    opacity: ${props => (props.$blurred ? 0.6 : 1)};
    -webkit-transition: opacity 0.5s ease;
    -moz-transition: opacity 0.5s ease;
    -o-transition: opacity 0.5s ease;
    transition: opacity 0.5s ease;
    overflow: hidden;
`;
