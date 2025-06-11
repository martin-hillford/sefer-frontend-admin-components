import { createContext } from "react";

interface Context  {
    language: string,
    setLanguage: (language: string) => void
}

// Creates an initial object, don't implement the set language method
export const initial = {
    language: localStorage.getItem("language") ?? 'en',
    setLanguage: (language: string) => {
        localStorage.setItem('language', language);
    }
}
export const LanguageContext = createContext<Context>(initial);
