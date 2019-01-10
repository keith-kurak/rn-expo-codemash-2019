import React, { Component } from 'react';
import { View } from 'react-native';
import LoginForm from '../components/login';

/**
 * A Login screen, of course.
 * Doesn't really log you into anything.
 */
export default class LoginScreen extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
    };
  }

  _onChangeUsername = username => {
    this.setState({
      username,
    });
  };

  _onChangePassword = password => {
    this.setState({
      password,
    });
  };

  _onLogin = () => {
    this.props.navigation.navigate('main');
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <LoginForm
          onChangeUsername={this._onChangeUsername}
          onChangePassword={this._onChangePassword}
          username={this.state.username}
          password={this.state.password}
          onPressLogin={this._onLogin}
        />
      </View>
    );
  }
}
