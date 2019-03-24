import React from 'react';
import { Text, View, Image } from 'react-native';
import { Images } from '../../global/themes';
import styles from './styles';

const Home = () => (
    <View style={styles.container}>
        <Text style={styles.label}>Welcome to React Native Bollerplate!</Text>
        <Image source={Images.logo} />
    </View>
);

export default Home;
