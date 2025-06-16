import { useAvailableLanguage } from "../../hooks/useAvailableLanguage";
import { terms } from "./terms";

export const Level = (props : {value : string}) => {
  const language = useAvailableLanguage();
  const item = Object.keys(terms[language]).find(key => key === props.value)
  if (!item) return <>{terms[language].Unspecified}</>;
  return <>{(terms[language] as any)[item]}</>;
};