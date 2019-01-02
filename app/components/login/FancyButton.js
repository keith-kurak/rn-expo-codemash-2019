import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, View, Text } from 'react-native';
import Styles from './styles';

const FancyButton = ({ title, onPress }) => (
  <View style={[Styles.roundedArea, Styles.button]}>
    <TouchableOpacity style={[Styles.buttonContent, Styles.roundedArea]} onPress={onPress}>
      <Text style={Styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  </View>
);

FancyButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default FancyButton;
