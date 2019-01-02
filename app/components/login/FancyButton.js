import React from 'react';
import { View, Text, Platform } from 'react-native';

const addPoopEmojis = text => `💩${text}💩`;

const FancyButton = ({ title }) => (
  <View
    style={{
      height: 40,
      borderColor: Platform.OS === 'ios' ? 'gray' : 'purple',
      backgroundColor: Platform.OS === 'ios' ? 'whitesmoke' : 'yellow',
      borderWidth: 1,
      borderRadius: Platform.OS === 'ios' ? 20 : 0,
      alignItems: 'center',
      justifyContent: 'center',
    }}>
    <Text>{Platform.OS === 'android' ? addPoopEmojis(title) : title }</Text>
  </View>
);

export default FancyButton;
