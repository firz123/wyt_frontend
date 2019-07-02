const INITIAL_STATE = {
  activityList: [
    {
      username: 'Sherlock',
      uri: 'https://octodex.github.com/images/pusheencat.png',
      pollID: 0,
      action: 'VOTE',
      voteOption: '👍',
      preview: 'How does this outfit look on me?',
    },
    {
      username: 'Sherlock',
      uri: 'https://octodex.github.com/images/pusheencat.png',
      pollID: 1,
      action: 'POST',
      preview: 'Del Taco has great fries.'
    },
  ]
};

const notificationReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state
  }
};

export default notificationReducer;
