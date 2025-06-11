import { useAvailableLanguage } from "../../hooks/useAvailableLanguage";
import { terms } from "./terms";

export const Role = ({ value } : { value : string | null | undefined }) => {
  const language = useAvailableLanguage();
  const item = Object.keys(terms[language]).find(key => key === value)
  if (!item) return <span>{terms[language].Unknown}</span>;
  return <span>{(terms[language] as any)[item]}</span>;
};


export const useRoleLabels = () => {
  const language = useAvailableLanguage();
  return [
    { label: terms[language].User, value: 'User' },
    { label: terms[language].Student, value: 'Student' },
    { label: terms[language].Mentor, value: 'Mentor' },
    { label: terms[language].Supervisor, value: 'Supervisor' },
    { label: terms[language].CourseMaker, value: 'CourseMaker' },
    { label: terms[language].Admin, value: 'Admin' }
  ]
}
