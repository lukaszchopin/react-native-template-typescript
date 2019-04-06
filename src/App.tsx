import React, { Component } from 'react';
import { View } from 'react-native';
import { inject } from 'mobx-react';
import { withDevMenuTrigger } from 'react-native-devmenu-trigger';
import { AppStyles } from './global/themes';
import withStoreProvider from './enhancers';
import RootStore, { Stores } from './stores/RootStore';
import AppStore from './stores/AppStore';
import Router from './routers';
import NavigationStore from './stores/NavigationStore';

interface Props {
    appStore: AppStore;
    navigationStore: NavigationStore;
}

@withDevMenuTrigger
@withStoreProvider(new RootStore())
@inject((allStores: Stores) => ({
    appStore: allStores.appStore,
    navigationStore: allStores.navigationStore,
}))
class App extends Component<Props> {
    componentDidMount() {
        const {
            appStore: { onAppStarted },
        } = this.props;
        onAppStarted();
    }

    componentWillUnmount() {
        const {
            appStore: { onAppFinished },
        } = this.props;
        onAppFinished();
    }

    render() {
        const {
            navigationStore: { setNavigator, onNavigationStateChange },
        } = this.props;
        return (
            <View style={AppStyles.mainContainer}>
                <Router ref={setNavigator} onNavigationStateChange={onNavigationStateChange} />
            </View>
        );
    }
}

export default App;
