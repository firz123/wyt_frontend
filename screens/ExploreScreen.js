import React from 'react';
import { StyleSheet,
         View,
         ScrollView,} from 'react-native';
import { QuestionPost } from '../components/QuestionPost';
import { connect } from 'react-redux';
import { votePoll } from '../actions/actions';

class ExploreScreen extends React.Component {
  static navigationOptions = {
    title: 'Explore',
  };

  voteCallback = (pollID, preview, option, inc_dec) => {
    this.props.votePoll(this.props.activity.voterID, pollID, preview, option, inc_dec)
  }

  makeQuestionPolls(pollArr) {
    const pollFeed = pollArr.map((poll) =>
      <QuestionPost
        username={poll.username}
        tag={poll.tag}
        content={poll.content}
        img={poll.img}
        uri={poll.uri ? poll.uri : null}
        profileImg={poll.profileImg}
        votingOpts={poll.votingOpts}
        votingResults={poll.votingResults}
        voteCallback={this.voteCallback}
        pollID={poll.pollID}
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
  const { activity } = state
  const { polls } = state
  return { activity, polls }
};

const mapDispatchToProps = dispatch => ({
  votePoll: (voterID, globalPollID, preview, voteOption, inc_dec) =>
            dispatch(votePoll(voterID, globalPollID, preview, voteOption, inc_dec))
})

export default connect(mapStateToProps, mapDispatchToProps)(ExploreScreen);
