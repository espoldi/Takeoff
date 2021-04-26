import {
  FETCH_ALL_BUCKETLIST_ITEMS,
  CREATE_BUCKETLIST_ITEM,
  DELETE_BUCKETLIST_ITEM
} from '../actions/types/bucketTypes';

const initialState = {
  bucketListItems: []
}

function bucketReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_ALL_BUCKETLIST_ITEMS:
      return {
        ...state,
        bucketListItems: action.payload
      };
    case CREATE_BUCKETLIST_ITEM:
      return {
        bucketListItems: [
          ...state.bucketListItems,
          action.payload
        ]
      };
    case DELETE_BUCKETLIST_ITEM:
      return {
        bucketListItems: state.bucketListItems.filter((item) => item._id !== action.payload)
      };
    default:
      return state;
  }
}

export default bucketReducer;