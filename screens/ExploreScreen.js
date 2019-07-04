import React from 'react';
import { ScrollView,} from 'react-native';
import { QuestionPost } from '../components/QuestionPost';
import { connect } from 'react-redux';
import { votePoll, grabPostsFromAPI } from '../actions/actions';

/**
 * Main screen where polls from other users are loaded and the user can
 * vote on them. Also new polls from the user will appear here.
 *
 * TODO: Reverse the order of the polls so most recent are first
 */
class ExploreScreen extends React.Component {
  static navigationOptions = {
    title: 'Explore',
  };

  /**
  * Uncomment this to use the API instead of the dummy data.
  */
  //componentDidMount() {
  //  this.props.grabPostsFromAPI();
  //}

  /**
  * Callback called by QuestionPosts to dispatch to Redux after a user votes on
  * a question.
  */
  voteCallback = (pollID, preview, option, inc_dec) => {
    this.props.votePoll(this.props.activity.userID, pollID, preview, option, inc_dec)
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

const mapStateToProps = (state) => {
  const { activity } = state
  const { polls } = state
  return { activity, polls }
};

const mapDispatchToProps = dispatch => {
  return {
  votePoll: (voterID, globalPollID, preview, voteOption, inc_dec) =>
            dispatch(votePoll(voterID, globalPollID, preview, voteOption, inc_dec)),
  grabPostsFromAPI: () => dispatch(grabPostsFromAPI())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ExploreScreen);
