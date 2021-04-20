import { FETCH_ALL_TRIPS, CREATE_TRIP, UPDATE_TRIP, DELETE_TRIP, SET_CURRENT_TRIP }
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
        currentTrips: action.payload.currentTrips,
        archivedTrips: action.payload.archivedTrips
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
      return {
        ...state,
        currentTrips: state.currentTrips.map((trip) => (trip._id === action.payload._id ? action.payload : trip)),
        archivedTrips: state.archivedTrips.map((trip) => (trip._id === action.payload._id ? action.payload : trip))
      };
    case DELETE_TRIP:
      return {
        ...state,
        currentTrips: state.currentTrips.filter((trip) => trip._id !== action.payload),
        archivedTrips: state.archivedTrips.filter((trip) => trip._id !== action.payload)
      }
    case SET_CURRENT_TRIP:
      return {
        ...state,
        workingTrip: action.payload
      }
    default: 
      return state;
  }
}

export default tripReducer;