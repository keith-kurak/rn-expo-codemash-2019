import { createBottomTabNavigator } from 'react-navigation';
import InboxScreen from './InboxScreen';
import SettingsScreen from './SettingsScreen';
import CoolStuffScreen from './CoolStuffScreen';

const MainTabs = createBottomTabNavigator(
  {
    inbox: { screen: InboxScreen },
    coolStuff: { screen: CoolStuffScreen },
    settings: { screen: SettingsScreen },
  },
  {
    initialRouteName: 'inbox',
  }
);

MainTabs.navigationOptions = ({ navigation }) => {
  const currentTabRoute = navigation.state.routes[navigation.state.index].routeName;
  if (currentTabRoute === 'inbox') {
    return {
      title: 'Inbox',
    };
  }
  if (currentTabRoute === 'coolStuff') {
    return {
      title: 'Cool Stuff',
    };
  }
  return {
    title: 'Settings',
  };
};

export default MainTabs;
