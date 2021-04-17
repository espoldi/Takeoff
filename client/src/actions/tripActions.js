import { FETCH_ALL, CREATE, UPDATE, DELETE } from './types/tripTypes';
import * as api from '../api/trips';

export const getTrips = () => async (dispatch) => {
  try {
    const { data } = await api.fetchTrips();

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
}

export const createTrip = (trip) => async (dispatch) => {
  try {
    const { data } = await api.createTrip(trip);
    dispatch({ type: CREATE, payload: data })
  } catch (error) {
    console.log(error);
  }
}