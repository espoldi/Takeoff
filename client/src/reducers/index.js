import { combineReducers } from "redux";
import authReducer from "./authReducers";
import errorReducer from "./errorReducers";
import postReducer from "./postsReducers";
import tripReducer from "./tripReducers";

const rootReducer = combineReducers({
  auth: authReducer,
  errors: errorReducer,
  posts: postReducer,
  trips: tripReducer
});

export default rootReducer;