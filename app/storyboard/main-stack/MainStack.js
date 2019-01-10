import { createStackNavigator } from 'react-navigation';
import MainTabs from './main-tabs';
import ChatScreen from './ChatScreen';

/**
 * The main stack once you're logged in.
 * Can either show tabs or the chat screen.
 */
const MainStack = createStackNavigator(
  {
    mainTabs: { screen: MainTabs },
    chat: { screen: ChatScreen },
  },
  {
    initialRouteName: 'mainTabs',
  }
);

export default MainStack;
