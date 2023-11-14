import { SET_USER_EMAIL } from "./user.actiontype";

export const setUserEmail = (email) => ({
  type: SET_USER_EMAIL,
  payload: email,
});
