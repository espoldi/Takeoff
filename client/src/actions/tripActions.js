import { FETCH_ALL_TRIPS, CREATE_TRIP, UPDATE_TRIP, DELETE_TRIP } from './types/tripTypes';
import * as api from '../api/trips';

export const getTrips = () => async (dispatch) => {
  try {
    const { data } = await api.fetchTrips();

    dispatch({ type: FETCH_ALL_TRIPS, payload: data });
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