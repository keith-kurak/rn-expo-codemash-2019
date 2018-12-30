import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import PropTypes from 'prop-types';
import Styles from './styles';
import FancyButton from './FancyButton';
import { sizes, colors } from '../../config/common-styles';

class LoginForm extends Component {

  render () {
    const { onPressLogin, username, onChangeUsername, password, onChangePassword } = this.props;
    return (
      <View style={Styles.wrapper}>
        <TextInput
          onChangeText={onChangeUsername}
          value={username}
          placeholder="Username"
          autoCorrect={false}
          autoCapitalize="none"
          style={
            (Styles.loginInput,
            {
              height: 44,
              borderBottomColor: colors.secondaryText,
              borderBottomWidth: 1,
            })
          }
          onSubmitEditing={() => this._passwordTextbox.focus()}
          returnKeyType="next"
          keyboardType="email-address"
          autoFocus
        />
        <TextInput
          ref={ref => {
            this._passwordTextbox = ref;
          }}
          onChangeText={onChangePassword}
          value={password}
          placeholder="Password"
          style={(Styles.loginInput, { height: 44, marginBottom: sizes.medium })}
          secureTextEntry
          returnKeyType="go"
          onSubmitEditing={onPressLogin}
        />
        <FancyButton title="Sign in" onPress={onPressLogin} />
      </View>
    );
  }
}

LoginForm.propTypes = {
  onChangePassword: PropTypes.func.isRequired,
  onChangeUsername: PropTypes.func.isRequired,
  onPressLogin: PropTypes.func.isRequired,
  password: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
};

export default LoginForm;
