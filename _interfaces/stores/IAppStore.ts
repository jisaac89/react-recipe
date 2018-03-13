export interface IAppStore {
    is_loading?: boolean;
    title: string;
    is_nightmode?: boolean;
    is_menuEnabled?: boolean;
    toggleNightMode(): void;
}