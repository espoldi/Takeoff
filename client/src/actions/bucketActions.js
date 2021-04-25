import {
  FETCH_ALL_BUCKETLIST_ITEMS,
  CREATE_BUCKETLIST_ITEM,
  DELETE_BUCKETLIST_ITEM
} from './types/bucketTypes';

import * as api from '../api/bucket';

export const getBucketItems = (userId) => async (dispatch) => {
  try {
    const { data } = await api.fetchBucketItems(userId);
    dispatch({ type: FETCH_ALL_BUCKETLIST_ITEMS, payload: data })
  } catch (error) {
    console.log(error.message);
  }
}

export const createBucketItem = (item) => async (dispatch) => {
  try {
    const { data } = await api.createBucketItem(item);
    dispatch({ type: CREATE_BUCKETLIST_ITEM, payload: data })
  } catch (error) {
    console.log(error.message);
  }
}

export const deleteBucketItem = (id) => async (dispatch) => {
  try {
    await api.deleteBucketItem(id);
    dispatch({ type: DELETE_BUCKETLIST_ITEM, payload: id })
  } catch (error) {
    console.log(error.message);
  }
}
