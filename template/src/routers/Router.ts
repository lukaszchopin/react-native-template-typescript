import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { Splash, Home } from '../containers';

export default createAppContainer(
    createSwitchNavigator({
        Splash,
        Home,
    }),
);
