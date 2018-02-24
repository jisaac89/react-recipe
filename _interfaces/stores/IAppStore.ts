export interface IAppStore {
    loading?: boolean;
    title: string;
    is_nightmode?: boolean;
    is_menuEnabled?: boolean;
    toggleNightMode(): void;
}