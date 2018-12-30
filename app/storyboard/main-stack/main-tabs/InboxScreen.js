import React, { Component } from 'react';
import { View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Inbox from '../../../components/inbox';
import { messageRepository } from '../../../stores/instances';

export default class InboxScreen extends Component {
  constructor() {
    super();
    this.state = {
      inboxItems: [],
      isLoading: true,
    }
  }

  componentDidMount = () => {
    this._refreshInbox();
  }
  
  _refreshInbox = () => {
    messageRepository.getInboxItems().then(inboxItems => {
      this.setState({
        inboxItems,
        isLoading: false,
      });
    });
  }

  render () {
    return (
      <View style={{ flex: 1 }}>
        <Inbox
          messages={this.state.inboxItems}
          isLoading={this.state.isLoading}
          onRefresh={this._refreshInbox}
          onPressMessage={(id) => this.props.navigation.navigate('chat', {messageId: id})}
        />
      </View>
    );
  }
}

InboxScreen.navigationOptions = () => ({
  title: 'Blah',
  tabBarLabel: 'Inbox',
  tabBarIcon: ({ tintColor }) => <Feather name="inbox" size={32} color={tintColor} />,
});
