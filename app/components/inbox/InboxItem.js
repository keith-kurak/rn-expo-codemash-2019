import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import moment from 'moment';
import { Thumbnail } from '../common';
import { colors, sizes } from '../../config/common-styles';

const InboxItem = ({ message, onPress }) => (
  <TouchableOpacity onPress={() => onPress(message.id)}>
    <View style={styles.cell}>
      <View style={styles.thumbnail}>
        <Thumbnail diameter={50} name={message.user} />
      </View>
      <View style={styles.right}>
        <View style={styles.topRight}>
          <Text style={styles.usernameText}>{message.user}</Text>
          <Text style={styles.dateText}>{getContextSensitiveDate(message.date)}</Text>
        </View>
        <Text>{message.text}</Text>
      </View>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  cell: {
    paddingTop: sizes.small,
    paddingBottom: sizes.small,
    paddingLeft: sizes.small,
    paddingRight: sizes.small,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  thumbnail: {
    paddingRight: sizes.small,
  },
  right: {
    flex: 1,
  },
  topRight: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
  },
  usernameText: {
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 3,
  },
  dateText: {
    fontStyle: 'italic',
    fontSize: 12,
    color: colors.secondaryText,
  }
});

const getContextSensitiveDate = date => {
  let formattedDate = '';

  const today = moment();
  const messageMoment = moment(date);

  if (messageMoment.isSame(today, 'd')) {
    formattedDate = messageMoment.format('h:mmA');
  } else {
    formattedDate = messageMoment.format('M/D/YYYY');
  }

  return formattedDate;
};

export default InboxItem;