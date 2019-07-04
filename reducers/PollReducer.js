import { ADD_POLL, VOTE_POLL } from '../actions/actions'

const INITIAL_STATE = {
  pollList: [
    {
      pollID: 0,
      username: 'Sample Friend',
      tag: 'samplefriend',
      content: 'Del Taco makes great fries.',
      img: false,
      profileImg: 'https:\/\/randomuser.me\/api\/portraits\/women\/44.jpg',
      votingOpts: ['👍', '👎'],
      votingResults: [61, 22],
    },
    {
      pollID: 1,
      username: 'Cat',
      tag: 'i_am_a_cat',
      content: 'How does this outfit look on me?',
      img: true,
      uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg',
      profileImg: 'https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg',
      votingOpts: ['👍', '👎'],
      votingResults: [90, 32],
    },
  ]
};

const pollReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_POLL:
      return {
          ...state,
          pollList: [...state.pollList,
          {
            pollID: state.pollList.length,
            username: action.username,
            tag: action.tag,
            content: action.content,
            profileImg: action.profileImg,
            img: false,
            votingOpts: action.votingOpts,
            votingResults: action.votingOpts.map((element) => 0),
          }]
      }
      case VOTE_POLL:
        const newState = { ...state };
        const index = newState.pollList[action.globalPollID].votingOpts.indexOf(action.voteOption)
        newState.pollList[action.globalPollID].votingResults[index] += action.inc_dec
        return newState;
    default:
      return state
  }
};

export default pollReducer;
