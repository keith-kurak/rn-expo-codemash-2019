import { createStackNavigator } from 'react-navigation';
import MainTabs from './main-tabs';
import ChatScreen from './ChatScreen';

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
