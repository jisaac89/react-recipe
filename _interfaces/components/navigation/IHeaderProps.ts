import { IAppStore } from "../../stores/IAppStore";
import { IAuthStore } from "../../stores/IAuthStore";

export interface IHeaderProps {
    appStore?: IAppStore;
    authStore?: IAuthStore;
}