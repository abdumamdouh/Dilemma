import {
  RECEIVE_USERS,
  USER_ASSIGN_QUESTION,
  USER_ASSIGN_ANSWER,
} from "../types";

const users = (users = {}, action) => {
  switch (action.type) {
    case RECEIVE_USERS: {
      return {
        ...users,
        ...action.payload.users,
      };
    }

    case USER_ASSIGN_QUESTION: {
      const { authedUser, qid } = action.payload;
      return {
        ...users,
        [authedUser]: {
          ...users[authedUser],
          questions: [...users[authedUser].questions, qid],
        },
      };
    }

    case USER_ASSIGN_ANSWER: {
      const { authedUser, qid, answer } = action.payload;
      return {
        ...users,
        [authedUser]: {
          ...users[authedUser],
          answers: {
            ...users[authedUser].answers,
            [qid]: answer,
          },
        },
      };
    }
    default:
      return users;
  }
};

export default users;
