import React, { Component } from 'react';
import { View } from 'react-native';
import { inject } from 'mobx-react';
import { AppStyles } from './global/themes';
import Home from './containers';
import withStoreProvider from './enhancers';
import RootStore, { Stores } from './stores/RootStore';
import AppStore from './stores/AppStore';

interface Props {
    appStore: AppStore;
}

@withStoreProvider(new RootStore())
@inject((allStores: Stores) => ({
    appStore: allStores.appStore,
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
        return (
            <View style={AppStyles.mainContainer}>
                <Home />
            </View>
        );
    }
}

export default App;
