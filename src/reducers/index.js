import authedUser from "../reducers/authedUser";
import users from "../reducers/users";
import questions from "../reducers/questions";

import { combineReducers } from "redux";
import { loadingBarReducer } from "react-redux-loading";

const rootReducer = combineReducers({
  authedUser,
  users,
  questions,
  loadingBar: loadingBarReducer,
});

export default rootReducer;
