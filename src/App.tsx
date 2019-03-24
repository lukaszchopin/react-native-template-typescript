import React from 'react';
import { Platform, StyleSheet, Text, View, Image } from 'react-native';
import { AppStyles, Images } from './global/themes';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n Shake or press menu button for dev menu',
});

const styles = StyleSheet.create({
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

const App = () => (
    <View style={AppStyles.mainContainer}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.tsx</Text>
        <Text style={styles.instructions}>{instructions}</Text>
				<Image source={Images.logo} />
    </View>
);

export default App;
