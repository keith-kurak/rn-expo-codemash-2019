import React from 'react';
import { SectionList, Text } from 'react-native';
import { sortBy } from 'lodash';
import InboxItem from './InboxItem';
import { ItemSeparator, SectionHeader } from '../common';
import { colors } from '../../config/common-styles';

const Inbox = ({ messages, onPressMessage, isLoading, onRefresh }) => {
  let sections = [];
  
  if (!isLoading) {
    const newItems = sortBy(messages.filter(i => i.isNew), m => m.date.getTime()).reverse();
    const oldItems = sortBy(messages.filter(i => !i.isNew), m => m.date.getTime()).reverse();
    sections = [
      {title: 'New Items', data: newItems},
      {title: 'Not-so-new Items', data: oldItems},
    ];
  }
  
  return (
    <SectionList
      style={{ backgroundColor: colors.background }}
      renderSectionHeader={({section: {title}}) => (
          <SectionHeader title={title} />
        )}
      sections={sections}
      keyExtractor={message => message.id}
      renderItem={({ item }) => <InboxItem message={item} onPress={onPressMessage} />}
      ItemSeparatorComponent={ItemSeparator}
      onRefresh={onRefresh}
      refreshing={isLoading}
    />
  );
};

export default Inbox;