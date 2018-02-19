import { observable } from 'mobx';
import { IAppStore } from '../_interfaces/stores/IAppStore';

let appStore: IAppStore;

class AppStore implements IAppStore {

    @observable title: string = 'React Recipe';
    @observable nightmode: boolean = false;

    constructor(isServer) {

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

// export default function getAppStore() {
//     if (appStore === null) {
//         appStore = new AppStore();
//     }
//     return appStore;
// }