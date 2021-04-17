import { FETCH_ALL, CREATE, UPDATE, DELETE }
  from '../actions/types/tripTypes';

const initialState = {
  currentTrip: {},
  trips: []
}

function tripReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case CREATE:
      return [...state, action.payload];
    case UPDATE:
      return state.map((trip) => (trip._id === action.payload._id ? action.payload: trip));
    case DELETE:
      return state.filter((trip) => trip._id !== action.payload);
    default: 
      return state;
  }
}

export default tripReducer;