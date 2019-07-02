import React from 'react';
import { StyleSheet,
         View,
         ScrollView,} from 'react-native';
import { QuestionPost } from '../components/QuestionPost';

export default class ExploreScreen extends React.Component {
  static navigationOptions = {
    title: 'Explore',
  };

  render() {
    return (
      <ScrollView>
        <QuestionPost
          username="Sherlock"
          tag="@sherlock"
          content="Del Taco makes great fries."
          img={false}
          votingOpts={['👍', '👎']} >
        </QuestionPost>
        <QuestionPost
          username="Octocat"
          tag="@octocat"
          content="How does this outfit look on me?"
          img={true}
          uri="https://octodex.github.com/images/pusheencat.png"
          votingOpts={['👍', '👎']} >
        </QuestionPost>
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
