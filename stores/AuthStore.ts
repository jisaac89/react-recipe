import { IAuthStore } from '../_interfaces/stores/IAuthStore';
import { observable, computed } from 'mobx';
import { IUser } from '_interfaces/data/IUser';
import { UserModel } from '../models/UserModel';
import { appStore } from '../stores/AppStore';

export let authStore: IAuthStore = null;

class AuthStore implements IAuthStore {
    @observable user: IUser = UserModel;

    constructor(isServer, lastUpdate?: any) {
        this.user = lastUpdate ? lastUpdate.user : {};
    }

    login(user: IUser) {
        this.user = user;
    }

    async logOut() {
        this.user = {};
        appStore.is_menuEnabled = false;
        return await true;
    }

    @computed get is_authenticated() {
        return !!this.user && !!this.user.name;
    }
}

export default function getAuthStore(isServer, lastUpdate?: any) {
    if (isServer && typeof window === 'undefined') {
        return new AuthStore(isServer, lastUpdate);
    } else {
        if (authStore === null) {
            authStore = new AuthStore(isServer, lastUpdate);
        }
        return authStore;
    }
}