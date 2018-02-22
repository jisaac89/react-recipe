import { observable, action } from 'mobx';
import { IAppStore } from '../_interfaces/stores/IAppStore';

let appStore: IAppStore = null;

class AppStore implements IAppStore {

    @observable title: string = 'React Recipe';
    @observable is_nightmode: boolean = false;
    @observable is_menuEnabled: boolean = false;

    constructor(isServer, lastUpdate?: any) {
        this.is_nightmode = lastUpdate ? lastUpdate.nightmode : false;
    }

    @action toggleNightMode() {
        this.is_nightmode = !this.is_nightmode;
    }

    @action toggleMenu() {
        this.is_menuEnabled = !this.is_menuEnabled;
    }

}

export default function initAppStore(isServer, lastUpdate?: any) {
    if (isServer && typeof window === 'undefined') {
        return new AppStore(isServer, lastUpdate);
    } else {
        if (appStore === null) {
            appStore = new AppStore(isServer, lastUpdate);
        }
        return appStore;
    }
}