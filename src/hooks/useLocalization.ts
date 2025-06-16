import { useAvailableLanguage } from './useAvailableLanguage';

interface ILocalization<T> {
    nl : T,
    en : T,
}

export function useLocalization<T>(localization : ILocalization<T>) {
    const language = useAvailableLanguage();
    return localization[language];
}
