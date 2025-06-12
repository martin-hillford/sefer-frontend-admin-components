import { ReactNode, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useAvailableLanguage } from "../../hooks/useAvailableLanguage";
import { isDefined } from "../../util/validator/util";
import { Button } from "../Button";
import { ButtonGroup } from "../ButtonGroup";
import { Dialog } from "../Dialog";
import { Header } from "../Header";
import { Line } from "../Line";
import { localization } from "./localization";

type ConfirmProp = {
    header: string,
    content: ReactNode,
    variant?: 'selected' | 'default' | 'primary' | 'success' | 'info' | 'warning' | 'danger',
    onConfirmed: () => void,
    buttonText: string,
    onCanceled: () => void,
    speed?: number;
    layer?: number;
    show?: boolean
    onValidate?: () => boolean;
}

export const ConfirmDialog = (props: ConfirmProp) => {
  const { header, content, variant, buttonText, onConfirmed, onValidate, onCanceled, speed, layer, show } = props;
  const [shown, setShown] = useState(show !== false);
  const button = !variant ? 'primary' : variant;
  const language = useAvailableLanguage();
  const label = localization[language].cancel;

  useEffect(() => {
    if (!isDefined(show)) return;
    setShown(show === true);
  }, [show]);

  const confirm = () => {
    const valid = !onValidate || onValidate();
    if (!valid) return;
    setShown(false);
    if (onConfirmed) onConfirmed();
  };

  const cancel = () => {
    setShown(false);
    if (onCanceled) onCanceled();
  };

  if (!shown) return null;

  return (
    <Dialog layer={layer} speed={speed}>
      <Corrector>
        <Header variant="large" inline padding>{header}</Header>
      </Corrector>
      <Line />
      <Content>
        {content}
      </Content>
      <Line />
      <Footer>
        <ButtonGroup $pull="right">
          <Button onClick={cancel} variant="default" label={label} />
          <Button onClick={confirm} variant={button} label={buttonText} />
        </ButtonGroup>
      </Footer>
    </Dialog>
  );
};

const Corrector = styled.div`
    margin-bottom: -8px;
`;

const Content = styled.div`
    padding: 0 13px;
`;

const Footer = styled.div`
    padding: 0 13px 13px 13px;
`;
