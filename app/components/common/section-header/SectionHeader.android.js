import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import Styles from './Styles'; // Version can be specified in package.json

/**
 * A section header within a table.
 */
const SectionHeader = ({ title, style }) => (
  <View style={[title.length ? Styles.sectionHeader : Styles.emptySectionHeader, style]}>
    {title.length ? <Text style={Styles.sectionHeaderText}>{title}</Text> : <View />}
  </View>
);

SectionHeader.propTypes = {
  title: PropTypes.string,
  style: PropTypes.any,
};

SectionHeader.defaultProps = {
  style: null,
  title: '',
};

export default SectionHeader;
