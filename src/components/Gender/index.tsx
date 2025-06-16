import { useAvailableLanguage } from "../../hooks/useAvailableLanguage";
import { terms } from "./terms";

export const Gender = ({ value } : {value : "Male" | "Female"}) => {
  const language = useAvailableLanguage();
  if (value === "Female") return <span>{terms[language].Female}</span>;
  return <span>{terms[language].Male}</span>;
};
