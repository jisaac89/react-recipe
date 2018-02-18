import { action, observable } from 'mobx'

let store = null

class Store {
    @observable title: string = 'React Recipe';
    constructor(isServer) {

    }
}

export default function initAppStore(isServer) {
    if (isServer) {
        return new Store(isServer)
    } else {
        if (store === null) {
            store = new Store(isServer)
        }
        return store
    }
}