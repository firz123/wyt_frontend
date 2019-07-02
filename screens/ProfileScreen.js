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

class ProfileScreen extends React.Component {
  static navigationOptions = {
    title: 'Profile',
  };

  render() {
    return <ScrollView>
      <ProfileIntro
        username="Octocat"
        tag="octocat"
        bio="Hello this is a bio. This is the kind of person I am and what I like to think about."
        img={true}
        uri="https://octodex.github.com/images/pusheencat.png">
      </ProfileIntro>
      <View style={styles.titleStyle}>
        <Text style={styles.boldFont}>Activity Feed</Text>
      </View>
      <ActivityFeedItem
        username="Octocat"
        action="POST"
        poll="How does this outfit look on me?"
        profileImg="https://octodex.github.com/images/pusheencat.png"
        >
      </ActivityFeedItem>
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
