import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  TouchableHighlight,
  FlatList,
} from 'react-native';
import { ProfileIntro } from '../components/ProfileIntro';

export default class ProfileScreen extends React.Component {
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

    </ScrollView>;
  }
}
