import { useLanguage } from "./useLanguage";

type availableLanguages = 'en' | 'nl';

export const useAvailableLanguage = () : availableLanguages => {
    const language = useLanguage();
    return language === 'nl' ? 'nl' : 'en';
}
