import { observable } from 'mobx';
import { IAppStore } from '../_interfaces/stores/IAppStore';

let appStore: IAppStore;

class AppStore implements IAppStore {
    @observable title: string = 'React Recipe';
    constructor(isServer?: boolean) {

    }
}

export default function initAppStore(isServer) {
    if (isServer) {
        return new AppStore(isServer)
    } else {
        if (appStore === null) {
            appStore = new AppStore(isServer)
        }
        return appStore;
    }
}

// export default function getStore() {
//     if (appStore === null) {
//         appStore = new AppStore();
//     }
//     return appStore;
// }