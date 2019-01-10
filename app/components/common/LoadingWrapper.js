import React from 'react';
import PropTypes from 'prop-types';
import { View, ActivityIndicator } from 'react-native';

/**
 * Wrap a view in something that will either show the view
 * when isLoading is false, or a spinner if isLoading is true.
 */
const LoadingWrapper = ({ isLoading, children, style }) => (
  <View style={[{ flex: 1 }, style]}>
    {isLoading ? (
      <ActivityIndicator
        size="large"
        style={{
          flex: 1,
          backgroundColor: 'transparent',
        }}
      />
    ) : null}
    {!isLoading && children}
  </View>
);

LoadingWrapper.propTypes = {
  children: PropTypes.any,
  isLoading: PropTypes.bool,
  style: PropTypes.any,
};

LoadingWrapper.defaultProps = {
  isLoading: false,
  children: null,
  style: null,
};

export default LoadingWrapper;
