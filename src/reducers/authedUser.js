//authenticatedUser
import { SET_AUTHENTICATED_USER, REMOVE_AUTHENTICATED_USER } from "../types";

const authedUser = (state = null, action) => {
  switch (action.type) {
    case SET_AUTHENTICATED_USER: {
      return action.payload;
    }

    case REMOVE_AUTHENTICATED_USER: {
      return null;
    }

    default: {
      return state;
    }
  }
};

export default authedUser;
