import { FETCH_ALL_TRIPS, CREATE_TRIP, UPDATE_TRIP, DELETE_TRIP }
  from '../actions/types/tripTypes';

const initialState = {
  workingTrip: {},
  currentTrips: [],
  archivedTrips: []
}

function tripReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_ALL_TRIPS:
      return {
        ...state,
        currentTrips: [
          action.payload.currentTrips
        ],
        archivedTrips: [
          action.payload.archivedTrips
        ]
      }
    case CREATE_TRIP:
      return {
        ...state,
        workingTrip: action.payload,
        currentTrips: [
          ...state.currentTrips,
          action.payload
        ]
      }
    case UPDATE_TRIP:
      return state.map((trip) => (trip._id === action.payload._id ? action.payload : trip));
    case DELETE_TRIP:
      return state.filter((trip) => trip._id !== action.payload);
    default: 
      return state;
  }
}

export default tripReducer;