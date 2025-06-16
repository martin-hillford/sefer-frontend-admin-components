// noinspection DuplicatedCode

export const DateTimeLabel = (props : {value : Date | string | undefined | null, empty? : string}) => {
  const { value, empty } = props;

  if (!value && !empty) return null;
  if (!value) return <span>{empty}</span>;

  const date = (value as string) ? new Date(value) : value as Date;

  const day = (`0${date.getDate()}`).slice(-2);
  const month = (`0${date.getMonth() + 1}`).slice(-2);
  const hour = (`0${date.getHours() + 1}`).slice(-2);
  const minute = (`0${date.getMinutes() + 1}`).slice(-2);

  return <span>{date.getFullYear()}-{month}-{day} {hour}:{minute}</span>;
};
