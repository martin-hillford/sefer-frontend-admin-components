import { ReactNode } from "react";
import { NavigationContext } from "../../context/NavigationContext";
import { Navigation } from "../../types/Navigation";

/**
 * This component library contains Navigation components that render the navigation columns.
 * This provider ensures the data can be set
 */
export const NavigationProvider = (props: { children: ReactNode, publicSite: string, navigation: Navigation }) => {
    const { children, publicSite, navigation } = props;
    const context = { publicSite, navigation };
    return (
        <NavigationContext.Provider value={context}>
            {children}
        </NavigationContext.Provider>
    );
}
