import React from 'react';
import { StyleSheet,
         View,
         ScrollView,} from 'react-native';
import { QuestionPost } from '../components/QuestionPost';
import { connect } from 'react-redux';

class ExploreScreen extends React.Component {
  static navigationOptions = {
    title: 'Explore',
  };

  makeQuestionPolls(pollArr) {
    const pollFeed = pollArr.map((poll) =>
      <QuestionPost
        username={poll.username}
        tag={poll.tag}
        content={poll.content}
        img={poll.img}
        uri={poll.uri ? poll.uri : null}
        votingOpts={poll.votingOpts}
        key={poll.pollID} />
    )
    return (
      <ScrollView>
          { pollFeed }
      </ScrollView>
    );
  }

  render() {
    return this.makeQuestionPolls(this.props.polls.pollList);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});


const mapStateToProps = (state) => {
  const { polls } = state
  return { polls }
};

export default connect(mapStateToProps)(ExploreScreen);
