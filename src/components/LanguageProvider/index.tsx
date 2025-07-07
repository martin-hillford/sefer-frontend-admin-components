import { ReactNode, useContext, useState } from "react";
import { LanguageContext } from "../../context/LanguageContext";

/**
 * The languageProvider is a generic language provider that will use localstorage
 * to store the selected language
 */
export const LanguageProvider = (props: { children: ReactNode }) => {
  const context = useContext(LanguageContext);
  const state = useState<string>(context.language);

  const setLanguage = (language: string) => {
    state[1](language);
    context.setLanguage(language);
  }

  const current = { language: state[0], setLanguage }


  const { children } = props;
    return (
        <LanguageContext.Provider value={current}>
            {children}
        </LanguageContext.Provider>
    );
}
