import React, { Component } from 'react';
import { View } from 'react-native';
import Chat from '../../components/chat';
import { LoadingWrapper } from '../../components/common';
import { messageRepository } from '../../stores/instances';

export default class ChatScreen extends Component {
  constructor() {
    super();
    this.state = {
      messages: [],
      isLoading: true,
    };
  }

  componentDidMount = () => {
    this._refresh();
  };

  _refresh = () => {
    messageRepository.getMessages(this.props.navigation.state.params.messageId).then(messages => {
      this.setState({
        messages,
        isLoading: false,
      });
    });
  };

  _onSendMessage = message => {
    const messages = this.state.messages;

    messages.push({
      id: messages.length,
      userType: 'you',
      text: message,
      date: new Date(),
      user: 'Your Name',
    });
    this.setState({
      messages,
    });
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <LoadingWrapper isLoading={this.state.isLoading}>
          <Chat messages={this.state.messages} onSendMessage={this._onSendMessage} />
        </LoadingWrapper>
      </View>
    );
  }
}

ChatScreen.navigationOptions = () => ({
  title: 'Chat',
});
