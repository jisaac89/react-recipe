// import { observable } from 'mobx';
import { IAuthStore } from '../_interfaces/stores/IAuthStore';

// store initials state must be set to null for client side rendering;
let authStore: IAuthStore = null;

class AuthStore implements IAuthStore {

}

export default function getAuthStore() {
    if (authStore === null) {
        authStore = new AuthStore();
    }
    return authStore;
}