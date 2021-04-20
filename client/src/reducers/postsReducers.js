import { FETCH_ALL, CREATE, UPDATE, DELETE, SET_CURRENT_POST } from '../actions/types/postTypes';

const initialState = {
  currentPost: {},
  posts: []
}

function postReducer (state = initialState, action) {
    switch (action.type) {
        case FETCH_ALL:
            return {
              ...state,
              posts: action.payload
            }
        case CREATE:
            return {
              ...state,
              posts: [
                ...state.posts,
                action.payload
              ]
            };
        case UPDATE:
            return state.map((post) => (post._id === action.payload._id ? action.payload : post));
        case DELETE:
            return {
              ...state,
              posts: state.posts.filter((post) => post._id !== action.payload)
            }
        case SET_CURRENT_POST:
            return {
              ...state,
              currentPost: action.payload
            }
        default:
            return state;
        
    }
};

export default postReducer;
