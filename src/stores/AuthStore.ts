import { observable, action } from 'mobx';
import { IAuthStore } from '../_interfaces/stores/IAuthStore';

import AuthService from '../utils/AuthService';

// store initials state must be set to null for client side rendering;
let authStore: IAuthStore = null;

class AuthStore implements IAuthStore {

    @observable isLoggedIn: boolean = false;
    @observable authService = null;

    @action loggedIn(isloggedIn: boolean) {
        this.isLoggedIn = isloggedIn;
    }

    initAuth() {
        this.authService = new AuthService('UtSVwHMRSxkrQmb0DuH7wZ6sU8HrnBTK', 'recoil.auth0.com');
        this.isLoggedIn = this.authService.loggedIn();
    }

    login() {
        this.authService.login();
    }
}

export default function getAuthStore() {
    if (authStore === null) {
        authStore = new AuthStore();
    }
    return authStore;
}