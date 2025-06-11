import styled from 'styled-components';
import { ReactNode } from 'react';
import { DataContext } from '../../types/DataContext';
import { Bold } from '../Bold';
import { ErrorText } from '../ErrorText';

export type PropertyProps = {
    name? : string,
    label : string,
    children? : ReactNode
    error? : boolean | undefined | null | string
    dataContext? : DataContext<any> | undefined
    maxWidth? : boolean,
    flex? : number
    tooltip? : string
    condensed? : boolean
    show? : boolean
}

export const Property = (props : PropertyProps) => {
  const { label, children, maxWidth, condensed, show = true, flex, name, dataContext } = props;
  if (!show) return null;

  let { error } = props;
  if (dataContext) error = dataContext.getError(name);
  if (error === '') error = true;

  const left = (!flex) ? 25 : Math.max(0, Math.min(100, flex));

  const marginBottom = condensed ? 0 : 15;
  const minHeight = condensed ? 28 : 37;

  return (
    <Row $maxWidth={maxWidth} $left={left} $marginBottom={marginBottom} $minHeight={minHeight}>
      <Bold>
        {error && <ErrorText>{label}</ErrorText>}
        {!error && <span>{label}</span>}
      </Bold>
      {!!children && <div>{children}</div>}
    </Row>
  );
};

const Row = styled.div<{$maxWidth? : boolean, $left : number, $minHeight : number, $marginBottom : number}>`
    display: flex;
    min-height: ${p => p.$minHeight}px;
    margin-bottom: ${p => p.$marginBottom}px;
    flex-wrap: wrap;

    > :first-child {
        flex: 0 0 100%;
        line-height: ${p => p.$minHeight}px;
        padding-right:6px;
        @media (min-width: 720px ) {
            flex: 0 0 ${p => p.$left}%;
            ${p => (p.$maxWidth !== false ? 'max-width:200px;' : '')}
        }
    }

    > :last-child {
        flex: 0 0 100%;
        margin-bottom: 2px;
        line-height: ${p => p.$minHeight}px;
        @media (min-width: 720px ) {
            flex: ${p => (p.$maxWidth !== false ? '1 1' : ' 0 0')} ${p => 100 - p.$left}%;
            padding-right: 15px;
            margin-bottom: 0;
        }
    }
`;
