//authenticatedUser
import { SET_AUTHENTICATED_USER, REMOVE_AUTHENTICATED_USER } from "../types";

const authedUser = (authedUser = null, action) => {
  switch (action.type) {
    case SET_AUTHENTICATED_USER: {
      return action.payload.userID;
    }

    case REMOVE_AUTHENTICATED_USER: {
      return null;
    }

    default: {
      return authedUser;
    }
  }
};

export default authedUser;
