import { Loading } from "../Loading";
import { DataPanel } from './DataPanel';
import { Container } from "./Styled";
import { PanelProps } from './types';

// This is a wrapper around the data panel that will deal with showing a spinner
export const Panel = (props : PanelProps) => {
  const { data } = props;
  if (data === undefined) return <Container><Loading variant="large" /></Container>;
  return <DataPanel {...props} data={data} />;
};
