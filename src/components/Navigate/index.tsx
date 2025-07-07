import { useNavigate } from "../../hooks/useNavigate"

export const Navigate = (props : { to: string}) => {
  const { to } = props;
  const navigate = useNavigate();
  setTimeout(() => navigate(to), 10);
  return null;
}
