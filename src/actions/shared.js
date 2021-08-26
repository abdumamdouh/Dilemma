import { getInitialData } from "../utils/api";
import { RECEIVE_USERS, RECEIVE_QUESTIONS } from "../types";
import { showLoading, hideLoading } from "react-redux-loading";

export const getInitialDataAction = () => (dispatch) => {
  showLoading();
  return getInitialData().then(({ users, questions }) => {
    dispatch(RECEIVE_USERS(users));
    dispatch(RECEIVE_QUESTIONS(questions));
    hideLoading();
  });
};
