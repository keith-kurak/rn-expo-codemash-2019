import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default class SettingsScreen extends Component {
  render () {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>A settings screen!</Text>
      </View>
    );
  }
}

SettingsScreen.navigationOptions = {
  title: 'Settings',
  tabBarLabel: 'Settings',
  tabBarIcon: ({ tintColor }) => <Ionicons name="md-settings" size={32} color={tintColor} />,
};