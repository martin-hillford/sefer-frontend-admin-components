import { UserRole } from "./UserRole";

export interface User {
    role: UserRole
    id: number
    name: string
}
