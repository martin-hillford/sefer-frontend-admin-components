import { createContext } from "react";
import { Navigation } from "../types/Navigation";

interface Context  {
    navigation: Navigation
    publicSite: string
}

export const initial = {
    navigation: { groups: [] },
    publicSite: "/"
}
export const NavigationContext = createContext<Context>(initial);
