import { Bold, Jumbotron } from '../';
import styled from 'styled-components';
import { Range } from '../../types/Range';
import { useLocalization } from "../../hooks/useLocalization";
import { localization } from './localization';
import { DateSelector } from '../DateSelector';

interface Props {
  defaultDate? : number,
  range : Range,
  setRange : (range: Range) => void,
  startYear?: number | null
}

export const DateRangeSelector = (props : Props) => {
  const { range, setRange, startYear, defaultDate = 1483275240 } = props;
  const terms = useLocalization(localization);

  const updateRange = (value: Range) => {
    const update = { ...value };
    if (update.start < update.end) setRange(update);
    else setRange({ start: update.end, end: update.start });
  };

  const onChangeStart = (value : number | null | undefined) => {
    updateRange({ ...range, start: value ?? defaultDate });
  };

  const onChangeEnd = (value : number | null | undefined) => {
    updateRange({ ...range, end: value ?? defaultDate });
  };

  return (
    <Jumbotron>
      <Container>
        <Bold>{terms.from}&nbsp;</Bold>
        <Padding />
        <DateSelector onChange={onChangeStart} defaultDate={range.start} startYear={startYear} />
        <Padding />
        <Bold>&nbsp;{terms.to}&nbsp;</Bold>
        <Padding />
        <DateSelector onChange={onChangeEnd} defaultDate={range.end} startYear={startYear} />
        <Padding />
      </Container>
    </Jumbotron>
  );
};

const Container = styled.div`
    display: flex;
    align-items: center;
    min-width:600px;
`;

const Padding = styled.div`
    width:6px;
`;
