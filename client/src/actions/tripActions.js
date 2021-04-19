import { FETCH_ALL_TRIPS, CREATE_TRIP, UPDATE_TRIP, DELETE_TRIP, SET_CURRENT_TRIP } from './types/tripTypes';
import * as api from '../api/trips';

export const getTrips = (userId) => async (dispatch) => {
  try {
    const { data } = await api.fetchTrips(userId);

    let currentTrips = [];
    let archivedTrips = [];

    for(let i=0; i<data.length; i++) {
      if(!data[i].archived) {
        currentTrips.push(data[i]);
      } else {
        archivedTrips.push(data[i]);
      }
    }

    const filteredData = {
      currentTrips,
      archivedTrips
    }

    dispatch({ type: FETCH_ALL_TRIPS, payload: filteredData });
  } catch (error) {
    console.log(error.message);
  }
}

export const createTrip = (trip) => async (dispatch) => {
  try {
    const { data } = await api.createTrip(trip);
    dispatch({ type: CREATE_TRIP, payload: data })
  } catch (error) {
    console.log(error);
  }
}

export const updateTrip = (id, trip) => async (dispatch) => {
  try {
      const { data } = await api.updatedTrip(id, trip);
      dispatch({ type: UPDATE_TRIP, payload: data });
  } catch (error) {
      console.log(error);
  }
}

export const setWorkingTrip = (id) => async (dispatch) => {
  try {
    const { data } = await api.getTrip(id);
    dispatch({ type: SET_CURRENT_TRIP, payload: data })
  } catch (error) {
    console.log(error);
  }
}
