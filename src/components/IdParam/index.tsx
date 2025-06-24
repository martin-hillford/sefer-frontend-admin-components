import { JSX } from "react";
import { Navigate } from "../Navigate";

type Props = {
    onId : (userId : number) => JSX.Element
    fallback : string
}

export const IdParam = (props : Props) => {
  const { fallback, onId } = props;
  const params = new URLSearchParams(location.search);
  const id = params.get("id")
  if (!id) return <Navigate to={fallback} />;
  const parsed = parseInt(id);
  if (!parsed || Number.isNaN(parsed)) return <Navigate to={fallback} />;

  return onId(parsed);
};
