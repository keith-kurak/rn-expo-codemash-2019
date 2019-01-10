import React, { Component } from 'react';
import { View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Inbox from '../../../components/inbox';
import { messageRepository } from '../../../stores/instances';

/**
 * The tab on the MainTabs navigator that shows the inbox.
 * An example of the "screen/ container" pattern, where
 * data is wired up to UI components.
 */
export default class InboxScreen extends Component {
  constructor() {
    super();
    this.state = {
      inboxItems: [],
      isLoading: true,
    };
  }
  // ...

  // refresh on first load
  componentDidMount() {
    this._refreshInbox();
  }

  _refreshInbox = () => {
    this.setState({ isLoading: true });
    messageRepository.getInboxItems().then(inboxItems => {
      this.setState({
        inboxItems,
        isLoading: false,
      });
    });
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Inbox
          messages={this.state.inboxItems}
          isLoading={this.state.isLoading}
          onRefresh={this._refreshInbox}
          onPressMessage={id => {
            // push chat screen when message is tapped
            this.props.navigation.navigate('chat', { messageId: id });
          }}
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
