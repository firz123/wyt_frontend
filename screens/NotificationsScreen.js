import React from 'react';
import { StyleSheet,
         View,
         ScrollView,} from 'react-native';
import { NotificationPost } from '../components/NotificationPost';

export default class NotificationsScreen extends React.Component {
  static navigationOptions = {
    title: 'Notifications',
  };

  render() {
    return (
      <ScrollView>
        <NotificationPost
          username="Sherlock"
          content="Del Taco makes great fries."
          profileImg="https://octodex.github.com/images/pusheencat.png"
          >
        </NotificationPost>
        <NotificationPost
          username="Octocat"
          content="How does this outfit look on me? I think its good"
          profileImg="https://octodex.github.com/images/pusheencat.png"
          >
        </NotificationPost>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
