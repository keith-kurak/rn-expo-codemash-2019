import React, { Component } from 'react';
import { SafeAreaView, Platform } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { sortBy } from 'lodash';
import { GiftedChat } from 'react-native-gifted-chat';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import { LoadingWrapper } from '../common';

class Chat extends Component {
  _onSendMessage = message => {
    this.props.onSendMessage(message[0].text);
  };

  render() {
    const { messages } = this.props;

    const giftedChatMessages = sortBy(messages, m => m.date)
      .reverse()
      .map(message => ({
        _id: message.id,
        text: message.text,
        createdAt: message.date,
        user: {
          _id: message.userType,
          name: message.user,
        },
      }));

    // We use the KeyboardSpacer for Android only because Gifted Chat already has good keyboard handling for
    // iOS (as long as we account for the iPhone X home bar offset).
    // In gifted chat, it assumes windowSoftInputMode="adjustResize", which doesn't work by default with Expo's
    // Android configuration. Long story, check out https://github.com/FaridSafi/react-native-gifted-chat#notes-for-android
    // for more.
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <GiftedChat
          messages={giftedChatMessages}
          onSend={this._onSendMessage}
          user={{
            _id: 'you',
          }}
          bottomOffset={getBottomSpace()}
          renderLoading={() => <LoadingWrapper isLoading />}
        />
        {Platform.OS === 'android' && <KeyboardSpacer />}
      </SafeAreaView>
    );
  }
}

export default Chat;
