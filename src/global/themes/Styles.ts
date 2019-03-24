import { StyleSheet } from 'react-native';
import Colors from './Colors';
import Metrics from './Metrics';

const Styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: Colors.white,
        alignItems: 'center',
        paddingTop: Metrics.paddingTop,
        paddingBottom: Metrics.paddingBottom,
    },
});

export default Styles;
