import { observable, action } from 'mobx';
import { IAppStore } from '../_interfaces/stores/IAppStore';

// store initials state must be set to null for client side rendering;
let appStore: IAppStore = null;

class AppStore implements IAppStore {

    @observable title: string = 'React Recipe';
    @observable nightmode: boolean = false;

    constructor(isServer, lastUpdate?: any) {
        this.nightmode = lastUpdate ? lastUpdate.nightmode : false;
    }

    @action toggleNightMode() {
        this.nightmode = !this.nightmode;
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

// export default function getAppStore() {
//     if (!appStore) {
//         appStore = new AppStore();
//     }
//     return appStore;
// }