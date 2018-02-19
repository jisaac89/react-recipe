export interface IAuthStore {
    isLoggedIn: boolean;
    initAuth(): void;
    loggedIn(isLoggedIn: boolean): void;
}