import { IUser } from "../data/IUser";

export interface IAuthStore {
    login(user?: IUser): void;
    isAuthenticated: any;
}