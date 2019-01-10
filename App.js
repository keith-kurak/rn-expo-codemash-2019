import React, { Component } from 'react';
import { View } from 'react-native';
import Storyboard from './app/storyboard';

/**
 * Entry point of the app.
 * Just shows our navigator, which in turn displays the rest
 * of the screens.
 * { flex: 1 } just tells the view to take up the entire screen.
 */
export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Storyboard />
      </View>
    );
  }
}
