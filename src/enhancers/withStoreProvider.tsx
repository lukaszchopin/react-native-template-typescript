import React, { Component } from 'react';
import { Provider } from 'mobx-react';

const withStoreProvider = (Root: any) => (WrappedComponent: any): any =>
    class StoreProvider extends Component {
        rootStore: any;

        constructor(props: any) {
            super(props);
            this.rootStore = Root;
        }

        render() {
            return (
                <Provider {...this.rootStore.stores}>
                    <WrappedComponent />
                </Provider>
            );
        }
    };

export default withStoreProvider;
