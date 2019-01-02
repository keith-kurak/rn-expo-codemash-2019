import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import LoginScreen from './LoginScreen';
import MainStack from './main-stack';

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
