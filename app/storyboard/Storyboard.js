import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import LoginScreen from './LoginScreen';
import MainStack from './main-stack';

/**
 * Parent navigator for everything.
 * At the very top of the app, we can either be in a logged in state
 * or a logged out state.
 * A SwitchNavigator just switches between two branches of navigation
 * without any transitions or stacking.
 * I call this the storyboard to remind me of my good old iOS days.
 */
const Storyboard = createSwitchNavigator(
  {
    login: LoginScreen,
    main: MainStack,
  },
  {
    initialRouteName: 'login',
  }
);

export default createAppContainer(Storyboard);
