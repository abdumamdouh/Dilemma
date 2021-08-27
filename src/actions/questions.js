import { showLoading, hideLoading } from "react-redux-loading-bar";

import {
  RECEIVE_QUESTIONS,
  ADD_QUESTION,
  USER_ASSIGN_QUESTION,
  ANSWER_QUESTION,
  USER_ASSIGN_ANSWER,
} from "../types";

import { _saveQuestion, _saveQuestionAnswer } from "../utils/_DATA";

export const receiveQuestions = (questions) => ({
  type: RECEIVE_QUESTIONS,
  payload: { questions },
});

// Add Question Actions
const addQuestion = (question) => ({
  type: ADD_QUESTION,
  payload: { question },
});

const userAssignQuestion = ({ authedUser, qid }) => ({
  type: USER_ASSIGN_QUESTION,
  payload: { authedUser, qid },
});

export const handleQuestionAssignment =
  ({ optionOneText, optionTwoText, author }) =>
  (dispatch) => {
    dispatch(showLoading());
    return _saveQuestion({ optionOneText, optionTwoText, author }).then(
      (question) => {
        dispatch(addQuestion(question));
        dispatch(userAssignQuestion({ authedUser: author, qid: question.id }));
        dispatch(hideLoading());
      }
    );
  };

// Answer Question Actions

const answerQuestion = ({ authedUser, qid, answer }) => ({
  type: ANSWER_QUESTION,
  payload: { authedUser, qid, answer },
});

const userAssignAnswer = ({ authedUser, qid, answer }) => ({
  type: USER_ASSIGN_ANSWER,
  payload: { authedUser, qid, answer },
});

export const handleQuestionAnswer =
  ({ authedUser, qid, answer }) =>
  (dispatch) => {
    dispatch(showLoading());
    return _saveQuestionAnswer({ authedUser, qid, answer }).then(() => {
      dispatch(answerQuestion({ authedUser, qid, answer }));
      dispatch(userAssignAnswer({ authedUser, qid, answer }));
      dispatch(hideLoading());
    });
  };
