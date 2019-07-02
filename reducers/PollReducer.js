const INITIAL_STATE = {
  pollList: [
    {
      pollID: 0,
      username: 'Sherlock',
      tag: 'sherlock',
      content: 'Del Taco makes great fries.',
      img: false,
      votingOpts: ['👍', '👎'],
    },
    {
      pollID: 1,
      username: 'Octocat',
      tag: 'octocat',
      content: 'How does this outfit look on me?',
      img: true,
      uri: 'https://octodex.github.com/images/pusheencat.png',
      votingOpts: ['👍', '👎']
    },
  ]
};

const pollReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state
  }
};

export default pollReducer;
