export interface IAppStore {
    title: string;
    nightmode?: boolean;
    toggleNightMode(): void;
}