import { IAuthStore } from '../_interfaces/stores/IAuthStore';
import { observable } from 'mobx';

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