import { observable, computed, action } from 'mobx';
import Router from 'next/router';

let store = null;

class Store {
    @observable loading: boolean = false;
    @observable user: Object = null;

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
    if (store === null) {
        store = new Store()
    }
    return store
}