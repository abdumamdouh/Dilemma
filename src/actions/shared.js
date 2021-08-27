import { getInitialData } from "../utils/api";

import { receiveUsers } from "../actions/users";
import { receiveQuestions } from "../actions/questions";
// import { setAuthedUser } from "../actions/authenticatedUser";

import { showLoading, hideLoading } from "react-redux-loading-bar";

// const AUTHED_ID = "abdulrahmanmamdouh";

export const handleInitialData = () => (dispatch) => {
  dispatch(showLoading());
  return getInitialData().then(({ users, questions }) => {
    dispatch(receiveUsers(users));
    dispatch(receiveQuestions(questions));
    // dispatch(setAuthedUser(AUTHED_ID));
    dispatch(hideLoading());
  });
};
