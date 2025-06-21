import { ReactNode, useState } from 'react';
import styled from 'styled-components';
import { BreadCrumb, BreadCrumbs } from "../BreadCrumbs";
import { Navigation } from "../Navigation";
import { PageHeader } from "../PageHeader";

type JumbotronLayoutProps = {
    children : ReactNode,
    title : string,
    subTitle : string
    crumbs : BreadCrumb[],
    icon : ReactNode,
    overflow? : 'hidden' | 'auto' | undefined;
}

export const JumbotronLayout = (props : JumbotronLayoutProps) => {
    const { children, title, subTitle, crumbs, icon, overflow = 'hidden' } = props;
    const [collapsed, setCollapsed] = useState(true);

    return (
        <Container>
            <Navigation collapsed={collapsed} onToggleCollapsed={setCollapsed} />
            <Main $blurred={!collapsed}>
                <FixedPanel $overflow={overflow}>
                    <Header>
                        <PageHeader title={title} subTitle={subTitle} />
                        <BreadCrumbs icon={icon} crumbs={crumbs} />
                    </Header>
                    <Body>{children}</Body>
                </FixedPanel>
            </Main>
        </Container>
    );
};

const Header = styled.div`
    flex: 0 0 130px;
`;

const FixedPanel = styled.div<{$overflow : 'hidden' | 'auto'}>`

    height:100vh;
    overflow: auto;
    padding: 0 15px;

    @media (min-width: 1024px ) {
        height:100vh;
        overflow: ${p => p.$overflow};
        display: flex;
        flex-direction: column;
        padding: 0 15px 15px 15px;
    }
`;

const Body = styled.div`
    background-color: #F9F9F9;
    padding:15px 15px 30px 15px;
    margin-bottom: 15px;

    @media (min-width: 1024px ) {
        display: flex;
        flex: 1 1 auto;
        margin: 0;
    }
`;

const Container = styled.div`
    height:100vh;
    width:100vw;
    padding:0;
    margin:0;
    display: flex;
    overflow: hidden;
`;

const Main = styled.div<{ $blurred : boolean }>`
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
