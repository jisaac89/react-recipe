import { IAppStore } from "../../stores/IAppStore";

export interface IDefaultProps {
    centerContent?: boolean;
    appStore?: IAppStore;
    actions?: Array<any>;
}