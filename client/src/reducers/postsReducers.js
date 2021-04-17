import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../actions/types/postTypes';

const initialState = {
  posts: []
}

function postReducer (state = initialState, action) {
    switch (action.type) {
        case FETCH_ALL:
            return action.payload;
        case CREATE:
            return [...state, action.payload];
        case UPDATE:
            return state.map((post) => (post._id === action.payload._id ? action.payload : post));
        case DELETE:
            return state.filter((post) => post._id !== action.payload);
        default:
            return state;
    }
};

export default postReducer;
