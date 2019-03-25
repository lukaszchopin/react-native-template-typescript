import AppStore from './AppStore';
import AuthStore from './AuthStore';

export interface Stores {
    appStore: AppStore;
    authStore: AuthStore;
}

class RootStore {
    stores: Stores;

    constructor() {
        this.stores = {
            appStore: new AppStore(this),
            authStore: new AuthStore(this),
        };
    }
}

export default RootStore;
