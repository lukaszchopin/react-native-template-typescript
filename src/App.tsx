import React, { Component } from 'react';
import { View } from 'react-native';
import { AppStyles } from './global/themes';
import Home from './containers';

class App extends Component {
    componentDidMount() {
        console.log('App did mount');
    }

    componentWillUnmount() {
        console.log('App will unmount');
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
