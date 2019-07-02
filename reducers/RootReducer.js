import { combineReducers } from 'redux';
import userActivityReducer from './UserActivityReducer';
import pollReducer from './PollReducer';
import notificationReducer from './NotificationReducer';

const rootReducer = combineReducers({
  activity: userActivityReducer,
  polls: pollReducer,
  notifications: notificationReducer,
});

export default rootReducer;
