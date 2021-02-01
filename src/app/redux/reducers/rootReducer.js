import { combineReducers } from "redux";
import rewardsReducer from "./rewardsReducer";
import authReducer from './authReducer';

const rootReducer = combineReducers({
  rewards: rewardsReducer,
  auth: authReducer
});

export default rootReducer;
