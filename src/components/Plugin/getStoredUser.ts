import { Context } from "../../context/UserContext";
import { User } from "../../types/User";

export const getStoredUser = () => {
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
