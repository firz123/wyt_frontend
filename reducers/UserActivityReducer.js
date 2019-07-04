import { ADD_POLL, VOTE_POLL } from '../actions/actions'

const INITIAL_STATE = {
  userID: 0,
  username: 'Cat',
  tag: 'i_am_a_cat',
  bio: 'Images from reqres.in and uifaces.co. This place could serve as a bio for a user.',
  uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg',
  polls: 1,
  activities: [
    {
      action: 'POST',
      activityID: 0,
      userPollID: 0,
      preview: 'How does this outfit look on me?',
      active: true,
    },
    {
      action: 'VOTE',
      activityID: 1,
      globalPollID: 0,
      voteOption: '👍',
      preview: 'Del Taco has great fries.',
      active: true,
    },
  ]
};

const userActivityReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_POLL:
      return {
          ...state,
          polls: state.polls + 1,
          activities: [...state.activities,
          {
            action: 'POST',
            activityID: state.activities.length,
            userPollID: state.polls + 1,
            preview: action.content,
          }]
      }
    case VOTE_POLL:
      if (action.inc_dec < 0) {
        const newState = { ...state };
        var activityToNullify = newState.activities.filter(
          function(item) {
            return item.globalPollID == action.globalPollID &&
                   item.voteOption == action.voteOption &&
                   item.active;
          })[0]
        newState.activities[activityToNullify.activityID].active = false;
        return newState;
      } else {
        return {
            ...state,
            activities: [...state.activities,
            {
              action: 'VOTE',
              activityID: state.activities.length,
              globalPollID: action.globalPollID,
              voteOption: action.voteOption,
              preview: action.preview,
              active: true,
            }]
        }
      }
    default:
      return state
  }
};

export default userActivityReducer;
