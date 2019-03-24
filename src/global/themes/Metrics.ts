import { Dimensions } from 'react-native';
import { getStatusBarHeight, getBottomSpace } from 'react-native-iphone-x-helper';

const { width, height } = Dimensions.get('window');

// Used via Metrics.baseMargin

const screen = {
    screenWidth: width < height ? width : height,
    screenHeight: width < height ? height : width,
};

const metrics = {
    screenHeight: screen.screenHeight,
    screenWidth: screen.screenWidth,
    paddingTop: getStatusBarHeight(),
    paddingBottom: getBottomSpace(),
};

export default metrics;
