import { combineReducers } from "redux";
import authReducer from "./authReducers";
import errorReducer from "./errorReducers";
import itineraryItemReducer from './itineraryItemReducer';
import postReducer from "./postsReducers";
import tripReducer from "./tripReducers";

const rootReducer = combineReducers({
  auth: authReducer,
  errors: errorReducer,
  itinerary: itineraryItemReducer,
  posts: postReducer,
  trips: tripReducer
});

export default rootReducer;