import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Animated, LayoutAnimation } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default class CoolStuffScreen extends Component {
  // NOT ANIMATED VERSION
  /*constructor() {
    super();
    this.state = {
      topBoxHeight: 50,
    }
  }
  
  _makeTopBig = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    this.setState({topBoxHeight: 400});
  }
  
  _makeTopSmall = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    this.setState({topBoxHeight: 50});
  }*/

  // ANIMATED VERSION
  constructor() {
    super();
    this.state = {
      topBoxHeight: new Animated.Value(50),
      topBoxText: 'This is small',
      bottomBoxText: 'This is big',
    };
  }

  _makeTopBig = () => {
    this.setState({
      topBoxText: 'This is big',
      bottomBoxText: 'This is small',
    });
    Animated.spring(this.state.topBoxHeight, {
      toValue: 400,
    }).start();
  };

  _makeTopSmall = () => {
    this.setState({
      topBoxText: 'This is small',
      bottomBoxText: 'This is big',
    });
    Animated.spring(this.state.topBoxHeight, {
      toValue: 50,
    }).start();
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <TouchableOpacity onPress={this._makeTopBig}>
          <Animated.View
            style={{
              backgroundColor: 'pink',
              height: this.state.topBoxHeight,
              justifyContent: 'center',
              padding: 10,
            }}>
            <Text>{this.state.topBoxText}</Text>
          </Animated.View>
        </TouchableOpacity>
        <TouchableOpacity onPress={this._makeTopSmall} style={{ flex: 1 }}>
          <Animated.View
            style={{ backgroundColor: 'green', flex: 1, justifyContent: 'center', padding: 10 }}>
            <Text style={{ color: 'white' }}>{this.state.bottomBoxText}</Text>
          </Animated.View>
        </TouchableOpacity>
      </View>
    );
  }
}

CoolStuffScreen.navigationOptions = {
  tabBarLabel: 'Cool Stuff',
  tabBarIcon: ({ tintColor }) => (
    <MaterialCommunityIcons name="emoticon-cool" size={32} color={tintColor} />
  ),
};
