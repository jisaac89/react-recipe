import { observable, computed, action } from 'mobx';
import { IAuthStore } from '../_interfaces/stores/IAuthStore';

let authStore: IAuthStore | null = null;

class AuthStore implements IAuthStore {
    @observable loading: boolean = false;
    @observable user: Object | null = null;

    @action async signIn() {
        this.loading = true;

        await setTimeout(() => {
            this.user = {
                name: 'joe'
            };
            this.loading = false;
        }, 1000);
    }

    signOut = () => {
        this.user = {};
    }

    @computed get isAuthenticated() {
        return !!this.user;
    }

}

export default function getStore() {
    if (authStore === null) {
        authStore = new AuthStore();
    }
    return authStore;
}