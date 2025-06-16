import { ReactNode } from "react";
import { initial, LanguageContext } from "../../context/LanguageContext";

/**
 * The languageProvider is a generic language provider that will use localstorage
 * to store the selected language
 */
export const LanguageProvider = (props: { children: ReactNode }) => {
    const { children } = props;
    return (
        <LanguageContext.Provider value={initial}>
            {children}
        </LanguageContext.Provider>
    );
}
