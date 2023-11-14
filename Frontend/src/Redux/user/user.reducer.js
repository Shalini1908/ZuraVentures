import { SET_USER_EMAIL } from "./user.actiontype";
const initialState = {
  userEmail: "",
  user: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_EMAIL:
      return {
        ...state,
        userEmail: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
