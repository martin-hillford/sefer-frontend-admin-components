import { ReactNode, useState } from "react";
import { Context , UserContext} from "../../context/UserContext";
import { User } from "../../types/User";

/** This UserProvider can be used for plugins. It assumes the plugin is running in a subdirectory */
export const PluginUserProvider = (props: { logonUrl: string, children: ReactNode }) => {
    const { logonUrl, children } = props;
    const [ context ]  = useState(getStoredData());

    // Check if a context could be loaded from the local store. If that is not the case,
    // redirect to the provided logon url
    if(!context) { window.location.href = logonUrl; return null; }

    return (
        <UserContext value={context}>
            {children}
        </UserContext>
    )
}

const getStoredData = () => {
    try {
        // Get the data from the local storage
        const token = localStorage.getItem('token');
        const user = localStorage.getItem('user');
        const expires = parseInt(localStorage.getItem('expires') ?? '0');

        // If there is no user or token return
        if (!user || !expires || !token) return undefined;

        // Check if the token expired
        const now = Math.ceil(Date.now() / 1000);
        if (expires < now) return undefined;

        // Returns the data
        return { token, user: JSON.parse(user) as User, expires } as Context;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (_) { return undefined; }
};

