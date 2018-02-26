import { IAppStore } from "../stores/IAppStore";
import { IAuthStore } from "../stores/IAuthStore";

export interface IIndexProps {
    appStore?: IAppStore;
    authStore?: IAuthStore;
}