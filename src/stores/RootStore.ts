import AppStore from './AppStore';
import AuthStore from './AuthStore';
import NavigationStore from './NavigationStore';

export interface Stores {
    appStore: AppStore;
    authStore: AuthStore;
    navigationStore: NavigationStore;
}

class RootStore {
    stores: Stores;

    constructor() {
        this.stores = {
            appStore: new AppStore(this),
            authStore: new AuthStore(this),
            navigationStore: new NavigationStore(this),
        };
    }
}

export default RootStore;
