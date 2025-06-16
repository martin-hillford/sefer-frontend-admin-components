import { useAvailableLanguage } from "../../hooks/useAvailableLanguage";
import { terms } from "./terms";

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
