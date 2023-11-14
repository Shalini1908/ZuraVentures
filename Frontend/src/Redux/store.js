import {
  legacy_createStore,
  compose,
  combineReducers,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";

import userReducer from "./user/user.reducer";
import projectReducer from "./projects/projects.reducer";
import projectFileReducer from "./projectsFiles/projectFiles.reducer";

const rootReducer = combineReducers({
  user: userReducer,
  projects: projectReducer,
  projectFile: projectFileReducer,
});

const comp = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(
  rootReducer,
  comp(applyMiddleware(thunk))
);
