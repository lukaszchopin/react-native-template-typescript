import React from 'react';
import { Text, View, Image } from 'react-native';
import { Images } from '../../global/themes';
import styles from './styles';

const Splash = () => (
    <View style={styles.container}>
        <Text style={styles.label}>This is splash screen</Text>
        <Image source={Images.logo} />
    </View>
);

export default Splash;
