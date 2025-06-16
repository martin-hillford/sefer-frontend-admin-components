import { DropDown } from '../DropDown';
import { useState } from 'react';
import styled from 'styled-components';
import { useLocalization } from "../../hooks/useLocalization";
import { isDefined } from "../../util/validator/util";
import { localization } from './localization';

export const DateSelector = (props : { defaultDate? : number, onChange : (date : number | undefined) => void, startYear?: number | null }) => {
  const { onChange, defaultDate, startYear } = props;
  const months = useMonthsOptions();
  const terms = useLocalization(localization)

  const [year, setYear] = useState<number | undefined>(getDate(defaultDate).year);
  const [month, setMonth] = useState<number | undefined>(getDate(defaultDate).month);
  const [day, setDay] = useState<number | undefined>(getDate(defaultDate).day);

  const years = getYears(startYear);

  const onChangeDate = (setSate : (value: number | undefined) => void, value? : number, y? : number, m? : number, d? : number) => {
    const date = toDate(y, m, d);
    setSate(value);
    if (!date) onChange(date);
    else onChange(Math.round(date.getTime() / 1000));
  };

  const onChangeYear = (value? : number) => onChangeDate(setYear, value, value, month, day);
  const onChangeMonth = (value? : number) => onChangeDate(setMonth, value, year, value, day);
  const onChangeDay = (value? : number) => onChangeDate(setDay, value, year, month, value);

  const days = getDays(year, month);

  return (
    <Container>
      <DropDown name="year" options={years} value={year} placeholder={terms.year} onChange={onChangeYear} />
      <Padding />
      <DropDown name="month" options={months} value={month} placeholder={terms.month} onChange={onChangeMonth} />
      <Padding />
      <DropDown name="days" options={days} placeholder={terms.day} value={day} onChange={onChangeDay} />
    </Container>
  );
};

const useMonthsOptions = () => {
  const months = useLocalization(localization).months
  return months.map((month, index) => ({ label : month, value: index }));
}

const Container = styled.div`
    display: inline-flex;
    align-items: center;
`;

const Padding = styled.div`
    width:6px;
`;

const toDate = (year? : number, month? : number, day? : number) => {
  if (!isDefined(year) || !isDefined(month) || !isDefined(day)) return undefined;
  return new Date(year as number, month as number, day as number, 0, 0);
};

const getTime = (timestamp: number | null | undefined) => {
  if (!timestamp) return undefined;
  return new Date(timestamp * 1000);
};

const getDate = (timestamp: number | null | undefined) => {
  const date = getTime(timestamp);
  return {
    year: date?.getFullYear(),
    month: date?.getMonth(),
    day: date?.getDate()
  };
};

const getYears = (startYear?: number | null) => {
  const years = [];
  for (let year = startYear ?? 2019; year <= (new Date()).getFullYear(); year++) {
    years.push({ label: year.toString(), value: year });
  }
  return years;
};


const getDays = (year? : number, monthIndex? : number) => {
  if (!isDefined(year) || !isDefined(monthIndex)) return [];

  const lastDayOfMonth = (new Date(year as number, monthIndex as number + 1, 0)).getDate();
  const days = [];
  for (let day = 1; day <= lastDayOfMonth; day++) {
    days.push({ label: day.toString(), value: day });
  }
  return days;
};
