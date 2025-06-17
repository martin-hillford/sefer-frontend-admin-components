import { ReactNode } from 'react';
import styled from 'styled-components';
import { useLocalization } from "../../hooks/useLocalization";
import { ChevronLeft, True } from "../../icons";
import { Container, Main, ScrollPanel } from "../BaseLayout";
import { MenuGroupHeader } from "../MenuGroupHeader";
import { Navbar } from "../Navbar";
import { PageHeader } from "../PageHeader";
import { localization } from './localization';
import { NavBlock } from '../Navigation/styled';

type EditLayoutLayoutProps = {
    children : ReactNode,
    title? : string,
    subTitle? : string
    onAccept : () => Promise<void>
    onReject : () => Promise<void>
}

export const EditLayout = (props : EditLayoutLayoutProps) => {
  const { children, title, subTitle, onAccept, onReject } = props;
  const terms = useLocalization(localization);
  return (
    <Container>
      <Navbar $collapsed>
        <NavBlock>
          <MenuGroupHeader
            label={terms.back}
            icon={<ChevronLeft size={26} />}
            onClick={() => { onReject().then() }}
            collapsed
          />
          <MenuGroupHeader
            label={terms.accept}
            icon={<True size={24} />}
            onClick={() => { onAccept().then() }}
            collapsed
          />

        </NavBlock>
      </Navbar>
      <Main $blurred={false}>
        <ScrollPanel>
          {title && <PageHeader title={title} subTitle={subTitle} />}
          <Panel>{children}</Panel>
        </ScrollPanel>
      </Main>
    </Container>
  );
};

const Panel = styled.div``;
