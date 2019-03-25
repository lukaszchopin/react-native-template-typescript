import { AppState, AppStateStatus } from 'react-native';
import { observable, action } from 'mobx';
import BaseStore from './BaseStore';

export default class AppStore extends BaseStore {
    constructor(rootStore) {
        super(rootStore);
        this.appState = AppState.currentState;
    }

    @observable
    appState: AppStateStatus;

    @action
    onAppStarted = () => {
        console.log('On App Started');
        this.setEventListeners();
        const {
            authStore: { hydrateAuth },
            navigationStore: { navigate },
        } = this.rootStore.stores;
        hydrateAuth()
            .then(result => {
                setTimeout(() => {
                    navigate('Home');
                }, 2000);
            })
            .catch(err => {});
    };

    @action
    onAppFinished = () => {
        this.removeEventListeners();
    };

    @action
    setEventListeners = () => {
        AppState.addEventListener('change', this.handleAppStateChange);
    };

    @action
    removeEventListeners = () => {
        AppState.removeEventListener('change', this.handleAppStateChange);
    };

    @action
    handleAppStateChange = (nextAppState: AppStateStatus) => {
        this.appState = nextAppState;
    };
}
