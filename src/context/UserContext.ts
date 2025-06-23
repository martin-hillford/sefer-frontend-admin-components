import { createContext, useContext } from "react";
import { User } from "../types/User";

export interface Context {
    user: User
    token: string
    expires: number
}

export const UserContext = createContext<Context>({} as unknown as Context);

export const useUserContext = () => useContext(UserContext);
