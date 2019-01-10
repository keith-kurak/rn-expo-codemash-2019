import React from 'react';
import { View, StyleSheet } from 'react-native';

/**
 * A line to stick between things, like list items
 */
const ItemSeparator = () => <View style={styles.itemSeparator} />;

export default ItemSeparator;

const styles = StyleSheet.create({
  itemSeparator: {
    borderBottomColor: '#CFCFCF',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
