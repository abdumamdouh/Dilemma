import { SET_AUTHENTICATED_USER, REMOVE_AUTHENTICATED_USER } from "../types";

export const setAuthedUser = (userID) => ({
  type: SET_AUTHENTICATED_USER,
  payload: { userID },
});

export const removeAuthedUser = () => ({
  type: REMOVE_AUTHENTICATED_USER,
});
