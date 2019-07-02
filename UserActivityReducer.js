import { combineReducers } from 'redux';

const INITIAL_STATE = {
  action: 'POST',
  poll: 'How does this outfit look on me?',
};

const userActivityReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state
  }
};

export default combineReducers({
  activity: userActivityReducer,
});
