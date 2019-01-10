import React, { Component } from 'react';
import { View } from 'react-native';
import Chat from '../../components/chat';
import { LoadingWrapper } from '../../components/common';
import { messageRepository } from '../../stores/instances';

/**
 * A child screen to be pushed onto the stack when an inbox
 * item is tapped.
 * Shows the chat window.
 * This screen component loads just the messages for the current chat
 * based on the navigation params and passes them along to the
 * Chat UI component.
 */
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
