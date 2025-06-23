import { ReactNode, useState } from "react";
import { FetchContext, FetchContextProvider, getDeviceId } from "sefer-fetch";
import { ThemeProvider } from "styled-components";
import { UserContext } from "../../context/UserContext";
import {  lightTheme } from "../../themes";
import { LanguageProvider } from "../LanguageProvider";
import { getStoredUser } from "./getStoredUser";
import { useFetchConfig } from "./useFetchConfig";
import { useFetchNavigation } from "./useFetchNavigation";
import { NavigationContext } from "../../context/NavigationContext";

interface Props {
    configUrl? : string
    navigationUrl? : string
    logonUrl? : string,
    theme?: "light" | "dark"
    children: ReactNode
}

/** A plugin wraps all the required context provider for plugins **/
export const Plugin = (props : Props) => {
    const { children, configUrl = "/config.json", navigationUrl = "/navigation.json", logonUrl = "/logon" } = props;
    const [ context ]  = useState(getStoredUser());
    const config = useFetchConfig(configUrl);
    const groups = useFetchNavigation(navigationUrl);

    if(!context) { window.location.href = logonUrl; return null; }
    if(config === undefined || groups === undefined) return null;

    const fetchContext = { config, user : { token: context.token, deviceId: getDeviceId() } } as FetchContext
    const navigationContext = { navigation : { groups }, publicSite: config.publicSite }

    return (
        <ThemeProvider theme={lightTheme as any}>
            <FetchContextProvider context={fetchContext}>
                <UserContext value={context}>
                    <LanguageProvider>
                        <NavigationContext.Provider value={navigationContext}>
                            {children}
                        </NavigationContext.Provider>
                    </LanguageProvider>
                </UserContext>
            </FetchContextProvider>
        </ThemeProvider>
    )
}
