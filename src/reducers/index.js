import authedUser from "../reducers/authedUser";
import users from "../reducers/users";
import questions from "../reducers/questions";

import { combineReducers } from "redux";

export default combineReducers({
  authedUser,
  users,
  questions,
});
