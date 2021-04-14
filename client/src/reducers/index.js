import { combineReducers } from "redux";
import authReducer from "./authReducers";
import errorReducer from "./errorReducers";
import postReducer from "./postsReducers";

const rootReducer = combineReducers({
  auth: authReducer,
  errors: errorReducer,
  posts: postReducer
});

export default rootReducer;