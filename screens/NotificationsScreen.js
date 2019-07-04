import React from 'react';
import { StyleSheet,
         View,
         ScrollView,} from 'react-native';
import { NotificationPost } from '../components/NotificationPost';
import { ActivityFeedItem } from '../components/ActivityFeedItem';
import { connect } from 'react-redux';

class NotificationsScreen extends React.Component {
  static navigationOptions = {
    title: 'Notifications',
  };

  makeNotifications(notifArr) {
    const notificationFeed = notifArr.map((notif) =>
        <ActivityFeedItem
          username={notif.username}
          action={notif.action}
          poll={notif.preview}
          voteOption={notif.voteOption ? notif.voteOption : null}
          profileImg={notif.uri}
          active={true}
          key={notif.pollID}
          />
      )
      return (
        <ScrollView>
            { notificationFeed }
        </ScrollView>
      );
  }

  render() {
    return this.makeNotifications(this.props.notifications.activityList);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

const mapStateToProps = (state) => {
  const { notifications } = state
  return { notifications }
};

export default connect(mapStateToProps)(NotificationsScreen);
