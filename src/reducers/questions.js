import { RECEIVE_QUESTIONS, ADD_QUESTION, ANSWER_QUESTION } from "../types";

const questions = (questions = {}, action) => {
  switch (action.type) {
    case RECEIVE_QUESTIONS: {
      return {
        ...questions,
        ...action.payload.questions,
      };
    }

    case ADD_QUESTION: {
      const { question } = action.payload;
      return {
        ...questions,
        [question.id]: question,
      };
    }

    case ANSWER_QUESTION: {
      const { authedUser, qid, answer } = action.payload;
      return {
        ...questions,
        [qid]: {
          ...questions[qid],
          [answer]: {
            ...questions[qid][answer],
            votes: [...questions[qid][answer].votes, authedUser],
          },
        },
      };
    }
    default: {
      return questions;
    }
  }
};

export default questions;
