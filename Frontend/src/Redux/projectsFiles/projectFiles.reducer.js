import {
  FETCH_PROJECTFILES,
  GET_PROJECTFILES,
  UPDATE_PROJECTFILES,
  DELETE_PROJECTFILES,
  GET_PROJECTNAMEOFFILES,
} from "./projectFiles.actionType";

const initialState = {
  projectfiles: null,
  error: null,
};

const projectFileReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PROJECTFILES:
      return {
        ...state,
        projectfiles: action.payload,
        error: null,
      };
    case GET_PROJECTFILES:
    case UPDATE_PROJECTFILES:
    case DELETE_PROJECTFILES:
    case GET_PROJECTNAMEOFFILES:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default projectFileReducer;
