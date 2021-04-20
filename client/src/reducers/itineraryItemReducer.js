import {
  FETCH_ALL_ITINERARY_ITEMS,
  CREATE_ITINERARY_ITEM,
  //UPDATE_ITINERARY_ITEM,
  DELETE_ITINERARY_ITEM
} from '../actions/types/itineraryTypes';

const initialState = {
  itineraryItems: []
}

function itineraryItemReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_ALL_ITINERARY_ITEMS:
      return {
        ...state,
        itineraryItems: action.payload
      };
    case CREATE_ITINERARY_ITEM:
      return {
        itineraryItems: [
          ...state.itineraryItems,
          action.payload
        ]
      };
    case DELETE_ITINERARY_ITEM:
      return {
        itineraryItems: state.itineraryItems.filter((item) => item._id !== action.payload)
      };
    default:
      return state;
  }
}

export default itineraryItemReducer;