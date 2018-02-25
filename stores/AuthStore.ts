import { IAuthStore } from '../_interfaces/stores/IAuthStore';
import { observable, computed } from 'mobx';
import { IUser } from '_interfaces/data/IUser';
import { UserModel } from '../models/UserModel';
import { appStore } from '../stores/AppStore';

export let authStore: IAuthStore = null;

class AuthStore implements IAuthStore {
    @observable user: IUser = UserModel;

    login(user: IUser) {
        this.user = user;
    }

    async logOut() {
        this.user = {};
        appStore.is_menuEnabled = false;
        return await true;
    }

    @computed get is_Authenticated() {
        return !!this.user && !!this.user.name;
    }
}

export default function getAuthStore() {
    if (authStore === null) {
        authStore = new AuthStore();
    }
    return authStore;
}