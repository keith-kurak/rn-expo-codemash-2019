import React, { Component } from 'react';
import { View, Platform } from 'react-native';
import { sortBy } from 'lodash';
import { GiftedChat } from 'react-native-gifted-chat';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import { LoadingWrapper } from '../common';

class Chat extends Component {
  
  _onSendMessage = message => {
    this.props.onSendMessage(message[0].text);
  };
  
  render () {
    const { messages } = this.props;
    
    const giftedChatMessages = sortBy(messages, m => m.date).reverse().map(message => ({
      _id: message.id,
      text: message.text,
      createdAt: message.date,
      user: {
        _id: message.userType,
        name: message.user,
      },
    }));
  
    return (
      <View style={{ flex: 1 }} >
        <GiftedChat
          messages={giftedChatMessages}
          onSend={this._onSendMessage}
          user={{
            _id: 'you',
          }}
          renderLoading={() => <LoadingWrapper isLoading />}
        />
        { Platform.OS === 'android' && <KeyboardSpacer /> }
      </View>
    );
  }
}

export default Chat;