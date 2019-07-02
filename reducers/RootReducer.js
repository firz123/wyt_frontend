import { combineReducers } from 'redux';
import userActivityReducer from './UserActivityReducer';

const rootReducer = combineReducers({
  activity: userActivityReducer,
});

export default rootReducer;
