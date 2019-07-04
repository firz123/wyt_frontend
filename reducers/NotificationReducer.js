const INITIAL_STATE = {
  activityList: [
    {
      username: 'Sample Friend',
      uri: 'https:\/\/randomuser.me\/api\/portraits\/women\/44.jpg',
      pollID: 0,
      action: 'VOTE',
      voteOption: '👍',
      preview: 'How does this outfit look on me?',
    },
    {
      username: 'Sample Friend',
      uri: 'https:\/\/randomuser.me\/api\/portraits\/women\/44.jpg',
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
