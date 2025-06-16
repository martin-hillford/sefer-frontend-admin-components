import { useAvailableLanguage } from "../../hooks/useAvailableLanguage";
import { terms } from "./terms";

export const Role = ({ value } : { value : string | null | undefined }) => {
  const language = useAvailableLanguage();
  const item = Object.keys(terms[language]).find(key => key === value)
  if (!item) return <span>{terms[language].Unknown}</span>;
  return <span>{(terms[language] as any)[item]}</span>;
};