import { useNavigation } from "../../hooks/useNavigation"

export const Navigate = (props : { to: string}) => {
  const { to } = props;
  const navigate = useNavigation();
  setTimeout(() => navigate(to), 10);
  return null;
}
