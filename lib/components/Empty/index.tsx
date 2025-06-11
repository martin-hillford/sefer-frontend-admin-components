export const Empty = (props : { value : any, empty? : string }) => {
  const { value, empty } = props;
  if (!value && !empty) return null;
  if (!value) return <span>{empty}</span>;
  return <span>{value}</span>;
};