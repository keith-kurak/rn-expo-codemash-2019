import React from 'react';
import { View, StyleSheet } from 'react-native';

const ItemSeparator = () => <View style={styles.itemSeparator} />;

export default ItemSeparator;

const styles = StyleSheet.create({
  itemSeparator: {
    borderBottomColor: '#CFCFCF',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
