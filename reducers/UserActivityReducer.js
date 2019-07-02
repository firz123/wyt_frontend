import { combineReducers } from 'redux';

const INITIAL_STATE = {
  username: 'Octocat',
  tag: 'octocat',
  bio: 'Hello this is a bio. This is the kind of person I am and what I like to think about.',
  uri: 'https://octodex.github.com/images/pusheencat.png',
  activities: [
    {
      action: 'POST',
      pollID: 0,
      poll: 'How does this outfit look on me?',
    },
    {
      action: 'VOTE',
      voteOption: '👍',
      pollID: 1,
      poll: 'Del Taco has great fries.'
    },
  ]
};

const userActivityReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state
  }
};

export default userActivityReducer;
