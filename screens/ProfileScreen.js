import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { ProfileIntro } from '../components/ProfileIntro';
import { ActivityFeedItem } from '../components/ActivityFeedItem';
import { connect } from 'react-redux';

/**
* Contains the user's username, tag, bio , profile image, and activity feed,
* which is a list of their votes, polls, and comments.
* TODO: Users should be able to change their username, tag, bio, and picture.
*/
class ProfileScreen extends React.Component {
  static navigationOptions = {
    title: 'Profile',
  };

  makeActivityFeed(activityItem) {
    const activityFeed = activityItem.activities.map((act) =>
      <ActivityFeedItem
        username={activityItem.username}
        action={act.action}
        poll={act.preview}
        voteOption={act.voteOption ? act.voteOption : null}
        profileImg={activityItem.uri}
        active={act.active}
        key={act.activityID}
      />
    )
    return activityFeed;

  }
  render() {
    return <ScrollView>
      <ProfileIntro
        username={this.props.activity.username}
        tag={this.props.activity.tag}
        bio={this.props.activity.bio}
        img={true}
        uri={this.props.activity.uri}/>
      <View style={styles.titleStyle}>
        <Text style={styles.boldFont}>Activity Feed</Text>
      </View>
      { this.makeActivityFeed(this.props.activity) }
    </ScrollView>;
  }
}

const styles = StyleSheet.create({
  titleStyle: {
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: '#ccced1',
    padding: 5,
  },
  boldFont: {
    fontSize: 15,
    fontWeight: 'bold',
  },
});

const mapStateToProps = (state) => {
  const { activity } = state
  return { activity }
};

export default connect(mapStateToProps)(ProfileScreen);
