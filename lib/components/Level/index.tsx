import { useAvailableLanguage } from "../../hooks/useAvailableLanguage";
import { terms } from "./terms";

export const Level = (props : {value : string}) => {
  const language = useAvailableLanguage();
  const item = Object.keys(terms[language]).find(key => key === props.value)
  if (!item) return <>{terms[language].Unspecified}</>;
  return <>{(terms[language] as any)[item]}</>;
};

export const useLevelLabels = () => {
  const language = useAvailableLanguage();
  return [
    { label: terms[language].Unspecified, value: 'Unspecified' },
    { label: terms[language].Novice, value: 'Novice' },
    { label: terms[language].Intermediate, value: 'Intermediate' },
    { label: terms[language].Advanced, value: 'Advanced' },
    { label: terms[language].Superior, value: 'Superior' },
    { label: terms[language].Distinguished, value: 'Distinguished' }
  ]
}
