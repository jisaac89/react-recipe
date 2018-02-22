export interface IAppStore {
    title: string;
    is_nightmode?: boolean;
    is_menuEnabled?: boolean;
    toggleNightMode(): void;
}