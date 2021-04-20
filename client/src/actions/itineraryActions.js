import {
  FETCH_ALL_ITINERARY_ITEMS,
  CREATE_ITINERARY_ITEM,
  //UPDATE_ITINERARY_ITEM,
  DELETE_ITINERARY_ITEM
} from './types/itineraryTypes';

import * as api from '../api/itineraryItems';

export const getItineraryItems = (tripId) => async (dispatch) => {
  try {
    const { data } = await api.fetchItineraryItems(tripId);
    dispatch({ type: FETCH_ALL_ITINERARY_ITEMS, payload: data })
  } catch (error) {
    console.log(error.message);
  }
}

export const createItineraryItem = (item) => async (dispatch) => {
  try {
    const { data } = await api.createItineraryItem(item);
    dispatch({ type: CREATE_ITINERARY_ITEM, payload: data })
  } catch (error) {
    console.log(error);
  }
}

export const deleteItineraryItem = (id) => async (dispatch) => {
  try {
      await api.deleteItineraryItem(id);

      dispatch({ type: DELETE_ITINERARY_ITEM, payload: id });

  } catch (error) {
      console.log(error);
  }
}
