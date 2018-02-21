// import { observable } from 'mobx';
import { IAuthStore } from '../_interfaces/stores/IAuthStore';
import { observable } from 'mobx';

// store initials state must be set to null for client side rendering;
let authStore: IAuthStore = null;

class AuthStore implements IAuthStore {
    @observable isLoggedIn: boolean = false;
}

export default function getAuthStore() {
    if (authStore === null) {
        authStore = new AuthStore();
    }
    return authStore;
}