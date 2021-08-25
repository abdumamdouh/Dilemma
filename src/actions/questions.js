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

const addQuestion = (question) => ({
  type: ADD_QUESTION,
  payload: { question },
});

const userAssignQuestion = (question) => ({
  type: USER_ASSIGN_QUESTION,
  payload: { question },
});

export const handleQuestionAssignment = (question) => (dispatch) => {
  showLoading();
  _saveQuestion(question).then(() => {
    dispatch(addQuestion(question));
    dispatch(userAssignAnswer(question));
    hideLoading();
  });
};

const answerQuestion = (answer) => ({
  type: ANSWER_QUESTION,
  payload: { answer },
});

const userAssignAnswer = (answer) => ({
  type: USER_ASSIGN_ANSWER,
  payload: { answer },
});

export const handleQuestionAnswer = (question, answer) => (dispatch) => {
  showLoading();
  _saveQuestionAnswer({
    authedUser: question.author,
    qid: question.id,
    answer,
  }).then(() => {
    dispatch(answerQuestion(answer));
    dispatch(userAssignAnswer(answer));
    hideLoading();
  });
};
