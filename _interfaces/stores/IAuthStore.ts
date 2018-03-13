import { IUser } from "../data/IUser";

export interface IAuthStore {
    user?: IUser;
    login(user?: IUser): void;
    is_authenticated?: any;
}